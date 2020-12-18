class UI{
    constructor(){
        this.display = document.querySelector('#displayRow');
        this.notify = document.querySelector('#notification');
    }

    showResults(data){
        const results = data.airports;
        let output = ``;
        results.forEach( result => {
            output += `<tr>`;
            output += `<td>${result.name}</td>`;
            output += `<td>${result.iata}</td>`;
            output += `<td>${result.state.type}</td>`;
            output += `<td>${result.city}</td>`;
            output += `<td>${result.state.name}</td>`;
            output += `<td>${result.country.name}</td>`;
            output += `</tr>`;

        });
        this.notify.innerHTML = `
            <article class="message is-primary">
                <div class="message-body">
                    Showing <span class="tag is-success">${results.length}</span>
                    results for ${data.term.toUpperCase()}
                </div>
            </article>
        `;

        this.display.innerHTML = output;
    }

    showAlert(err){
        this.display.innerHTML = "";
        this.notify.innerHTML = `
            <article class="message is-danger">
                <div class="message-body">
                    ${err.message}
                </div>
            </article>
        `;

    }

    clearAlert(){
        const currentAlert = document.querySelector('.is-danger');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    inputSpinner(){
        const spinner = document.querySelector('#loading');
        spinner.classList.add('is-loading');

        setTimeout(() => {
            spinner.classList.remove('is-loading');
        }, 2500);
    }
}


export const ui = new UI();