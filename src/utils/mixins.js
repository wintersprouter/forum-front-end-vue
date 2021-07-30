import moment from 'moment'

export const fromNowFilter = {
  filters: {
    fromNow (datetime) {
      return datetime ? moment(datetime).fromNow() : '-'
    }
  }
}

export const addFavoriteMethod = {
  methods: {
    addFavorite () {
      this.restaurant = {
        ...this.restaurant, 
        isFavorited: true
      }
    }
  }  
}
export const deleteFavoriteMethod  = {
  methods: {
    deleteFavorite () {
      this.restaurant = {
        ...this.restaurant, 
        isFavorited: false
      }
    },
  }  
}
export const addLikeMethod  = {
  methods: {
    addLike () {
      this.restaurant = {
        ...this.restaurant,
        isLiked: true
      }
    },
  }  
}
export const deleteLikeMethod  = {
  methods: {
    deleteLike () {
      this.restaurant = {
        ...this.restaurant,
        isLiked: false
      }
    }
  }  
}