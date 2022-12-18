class MealItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: 'open',
    });
  }

  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        :host {
            width: 30%;
            display: inline-block;
            margin: auto 15px;
            margin-bottom: 18px;
            box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            -webkit-border-radius: 10px;
            overflow: hidden;
        }

        .image-meal {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
        }
        
        .image-meal:hover {
            scale: 1.15;
            transition: scale 350ms ease;
        }

        .meal-info {
            padding: 24px;
        }

        .meal-info > h2 {
            font-weight: lighter;
        }

        .meal-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
            /* number of lines to show */
        }

        .meal-desc {
            font-family: 'Oswald', sans-serif;
        }
        
        @media screen and (max-width: 1080px) {
            :host {
                width: 45%;
                margin: 10px 2.5%;
            }
        }

        @media screen and (max-width: 550px) {
            :host {
                width: 100%;
                margin: 10px auto;
            }
        }
        </style>
        <div>
            <img class = "image-meal"
            src = "${this._meal.strMealThumb}"
            alt = "Image Meal" >
            <div class = "meal-info">
                <h2>${this._meal.strMeal}</h2>
                <p><i>${this._meal.strCategory}</i>, ${this._meal.strArea}</p>
                <p class="meal-desc">${this._meal.strInstructions}</p>
            </div>
        </div>`;
  }
}

customElements.define('meal-item', MealItem);
