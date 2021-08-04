<template>
  <div class="container py-5">
    <AdminNav />
    <Spinner v-if="isLoading" />
    <template v-else>
      <form class="my-4">
        <div class="form-row">
          <div class="col-auto">
            <input
              v-model="newCategoryName"
              type="text"
              class="form-control"
              placeholder="新增餐廳類別..."
            />
          </div>
          <div class="col-auto">
            <button
              type="button"
              class="btn btn-primary mt-2"
              @click.stop.prevent="creatCategory"
              :disabled="isProcessing"
            >
              新增
            </button>
          </div>
        </div>
      </form>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col" width="60">
              #
            </th>
            <th scope="col">
              Category Name
            </th>
            <th scope="col" width="210">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" :key="category.id">
            <th scope="row">
              {{ category.id }}
            </th>
            <td class="position-relative">
              <div v-show="!category.isEditing" class="category-name">
                {{ category.name }}
              </div>
              <input
                v-show="category.isEditing"
                v-model="category.name"
                type="text"
                class="form-control"
              />
              <span
                v-show="category.isEditing"
                class="cancel"
                @click="handleCancel(category.id)"
              >
                ✕
              </span>
            </td>
            <td class="d-flex justify-content-between">
              <button
                v-show="!category.isEditing"
                type="button"
                class="btn btn-link mr-2"
                @click.stop.prevent="toggleIsEditing(category.id)"
              >
                Edit
              </button>
              <button
                v-show="category.isEditing"
                type="button"
                class="btn btn-link mr-2"
                @click.stop.prevent="
                  updateCategory({
                    categoryId: category.id,
                    name: category.name
                  })
                "
              >
                Save
              </button>
              <button
                type="button"
                class="btn btn-link mr-2"
                @click.stop.prevent="deleteCategory(category.id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<script>
import AdminNav from '@/components/AdminNav'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'
import Swal from 'sweetalert2'
import Spinner from './../components/Spinner'

export default {
  name: 'AdminCategories',
  components: {
    AdminNav,
    Spinner
  },
  // 3. 定義 Vue 中使用的 data 資料
  data() {
    return {
      newCategoryName: '',
      categories: [],
      isProcessing: false,
      isLoading: true
    }
  },
  // 5. 調用 `fetchCategories` 方法
  created() {
    this.fetchCategories()
  },
  methods: {
    async fetchCategories() {
      try {
        const { data } = await adminAPI.categories.get()
        //retrun object 需在外圍加一個()
        this.categories = data.categories.map(category => ({
          ...category,
          isEditing: false,
          nameCached: ''
        }))
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({ icon: 'error', title: '無法取得餐廳分類資料，請稍後再試' })
      }
    },
    async creatCategory() {
      try {
        if (!this.newCategoryName) {
          Toast.fire({
            icon: 'warning',
            title: '請填入分類名稱'
          })
          return
        }
        this.isProcessing = true
        const { data } = await adminAPI.categories.create({
          name: this.newCategoryName
        })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.categories.push({
          id: data.categoryId,
          name: this.newCategoryName,
          isEditing: false
        })
        this.newCategoryName = ''
        this.isProcessing = false
        Toast.fire({ icon: 'success', title: '新增餐廳分類資料成功' })
      } catch (error) {
        this.isProcessing = false
        Toast.fire({ icon: 'error', title: '無法新增餐廳分類資料，請稍後再試' })
      }
    },
    async deleteCategory(categoryId) {
      try {
        const result = await Swal.fire({
          title: '確定要刪除此分類?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        })

        if (result.isConfirmed) {
          const { data } = await adminAPI.categories.delete({ categoryId })
          if (data.status !== 'success') {
            throw new Error(data.message)
          }
          Swal.fire('Deleted!', '成功刪除此分類', 'success')
          this.categories = this.categories.filter(
            category => category.id !== categoryId
          )
        }
      } catch (error) {
        Toast.fire({ icon: 'error', title: '無法刪除餐廳分類資料，請稍後再試' })
      }
    },
    toggleIsEditing(categoryId) {
      this.categories = this.categories.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            isEditing: !category.isEditing,
            //編輯前的名稱
            nameCached: category.name
          }
        }
        return category
      })
    },
    async updateCategory({ categoryId, name }) {
      try {
        const { data } = await adminAPI.categories.update({ categoryId, name })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        Toast.fire({ icon: 'success', title: '更新餐廳分類資料成功' })
        this.toggleIsEditing(categoryId)
      } catch (error) {
        Toast.fire({ icon: 'error', title: '無法更新餐廳分類資料，請稍後再試' })
      }
    },
    handleCancel(categoryId) {
      this.categories = this.categories.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            // 把原本的餐廳類別名稱還回去
            name: category.nameCached
          }
        }
        return category
      })
      this.toggleIsEditing(categoryId)
    }
  }
}
</script>

<style scoped>
/* scoped只會作用到當下的這一個 component */
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>
