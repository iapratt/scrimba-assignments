class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }

    getDogHtml() {
        const { name, avatar, age, bio } = this
        return `
        <img class="tindogs" src="${avatar}">
        <div class="text">
        <h3 class="nameAge">${name}, ${age}<h3>
        <p class="bio">${bio}</p>
        </div>
        `
    }
}

export default Dog