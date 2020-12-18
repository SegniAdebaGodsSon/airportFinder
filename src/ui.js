class UI{
    constructor(){
        this.display = document.querySelector('#displayRow');
        this.notify = document.querySelector('#notification');
    }

    showResults(data){
        this.notify.innerHTML = "";
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

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert(){
        const currentAlert = document.querySelector('.is-danger');
        if(currentAlert){
            currentAlert.remove();
        }
    }
}


export const ui = new UI();