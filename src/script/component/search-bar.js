class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .search-container {
            font-family: 'Oswald', sans-serif;
            max-width: 330px;
            min-width: 300px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            padding: 16px;
            border-radius: 5px;
            display: flex;
            top: 10px;
            background-color: #ffffff;
        }

        .search-container > input {
            width: 70%;
            border: none;
            border-bottom: 1px solid #F9A826;
            padding: 7px;
            font-weight: bold;
        }

        .search-container > input:focus {
            outline: 0;
            border-bottom: 2px solid #F9A826;
        }

        .search-container > input:focus::placeholder {
            font-weight: bold;
        }

        .search-container > input::placeholder {
            color: #2F2E41;
            font-weight: normal;
        }

        .search-container > button {
            font-family: 'Bebas Neue', cursive;
            font-size: 1.3em;
            letter-spacing: 1.3px;
            width: 28%;
            border-radius: 25px;
            cursor: pointer;
            margin-left: auto;
            padding: 10px;
            background-color: #F9A826;
            color: #ffffff;
            border: none;
            text-transform: uppercase;
            transition: all ease-in-out 250ms;
        }

        .search-container > button:hover {
            background-color: #2F2E41;
            color: #ffffff;
        }

        .search-container > button:focus {
            outline: 0;
        }
        
        @media screen and (max-width:950px) {
            .search-container {
                margin: 0 auto;
            }
        }

        @media screen and (max-width: 550px) {
            .search-container {
                flex-direction: column;
                min-width: 250px;
                margin: 0 auto;
            }
            .search-container > input {
                width: 100%;
                margin-bottom: 12px;
            }
            .search-container > button {
                width: 100%;
                font-size: 1em;
            }
        }
        </style>
        <div id="search-container" class="search-container">
               <input placeholder="Search meal" id="searchElement" type="search">
               <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);