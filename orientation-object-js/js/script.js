class Product {
    // É sempre a primeira função executada pelo js
    constructor() {
        this.id = 1;
        this.arrayProducts = [];
    }

    // Função para salvar produtos
    save() {
        var product = this.learnDate();

        if (this.validField(product)) {
            this.add(product);
        }
        this.cancel();
        this.listTable();
    }

    // Adicionando um produto ao array e incrementando o id
    add(product) {
        this.arrayProducts.push(product);
        this.id++;
    }

    // Lê os dados dos campos de input
    learnDate() {
        let product = {}

        product.id = this.id;
        product.name = document.querySelector('.name_prod').value;
        product.price = document.querySelector('.price_prod').value;

        return product;
    }

    // Validando os campos
    validField(product) {
        let msg = '';

        if (product.name == '') {
            msg += "- Input name is invalid!";
        }
        if (product.price == '') {
            msg += "- Input price is invalid!";
        }
        if (msg != '') {
            alert(msg);
            return false;
        }

        return true;
    }

    // Listando os dados do array na tabela
    listTable() {
        let line_table = document.getElementById('line_table');
        line_table.innerText = '';

        // Percorrendo o array
        for (let i = 0; i < this.arrayProducts.length; i++) {
            let tr = line_table.insertRow();

            let td_id = tr.insertCell();
            let td_product = tr.insertCell();
            let td_price = tr.insertCell();
            let td_action = tr.insertCell();

            td_id.innerText = this.arrayProducts[i].id;
            td_product.innerText = this.arrayProducts[i].name;
            td_price.innerText = this.arrayProducts[i].price;

            let div_iconEdit = document.createElement('div');
            let div_iconDelete = document.createElement('div');
            let imgEdit = document.createElement('img');
            imgEdit.src = "img/editar.png";
            div_iconEdit.setAttribute('click', 'product.edit(' + this.arrayProducts[i].id + ')'); // Passando o evento e a função a ser executada
            let imgDelete = document.createElement('img');
            imgDelete.src = "img/lixeira.png";
            div_iconDelete.setAttribute('click', 'product.delete(' + this.arrayProducts[i].id + ')');

            div_iconEdit.classList.add('icon_action');
            div_iconEdit.classList.add('icon_action_edit');
            div_iconDelete.classList.add('icon_action');
            div_iconDelete.classList.add('icon_action_delete');
            td_action.classList.add('div_order_icons');

            div_iconEdit.appendChild(imgEdit);
            div_iconDelete.appendChild(imgDelete);

            td_action.appendChild(div_iconEdit);
            td_action.appendChild(div_iconDelete);
        }
    }

    // Função para cancelar produtos
    cancel() {
        document.querySelector('.name_prod').value = "";
        document.querySelector('.price_prod').value = "";
    }
    
    delete(id) {
        let line_table = document.getElementById('line_table');

        for (let i = 0; i < this.arrayProducts.length; i++) {
            if (this.arrayProducts[i].id == id) {
                this.arrayProducts.splice(i, 1); // Apaga um registro do array
                line_table.deleteRow(i);
            }
        }
    }
}

var product = new Product();

// Clicking buttons and calling functions
var save_product = document.querySelector('.save_prod');
var cancel_product = document.querySelector('.cancel_prod');

save_product.addEventListener('click', () => {
    product.save();
});

cancel_product.addEventListener('click', () => {
    product.cancel();
});
