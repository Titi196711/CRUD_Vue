var app = new Vue({
    el: '#app',
    data: {
        errorMsg: "",
        successMsg: "",
        showAddModal: false,
        showEditModal: false,
        showDeleteModal: false,
        users: {},
        newUser: {name: "", email: "", phone: ""},
        currentUser: {}
    },
    mounted:
            function () {
                this.getAllUsers();
            },

    methods: {

        getAllUsers() {
            axios.post("http://localhost/CRUD_vue/process.php?action=read").then(function (response) {
                if (response.data.error) {
                    app.errorMsg = response.data.message;
                } else {
//                    console.log(response.data);
                    app.users = response.data.users;
//                    console.log(app.users);
//                    console.log(app.successMsg);
                }
            });
        },
        addUser() {
            let formData = app.toFormData(app.newUser);
            axios.post("http://localhost/CRUD_vue/process.php?action=create", formData).then(function (response) {
                app.newUser = {name: "", email: "", phone: ""};
                if (response.data.error) {
                    app.errorMsg = response.data.message;
                } else {
                    app.successMsg = response.data.message;
                    app.getAllUsers();
                }
            });
        },
        updateUser() {
            let formData = app.toFormData(app.currentUser);
            axios.post("http://localhost/CRUD_vue/process.php?action=update", formData).then(function (response) {
                app.currentUser = {};
                if (response.data.error) {
                    app.errorMsg = response.data.message;
                } else {
                    app.successMsg = response.data.message;
                    app.getAllUsers();
                }
            });
        },
        deleteUser() {
            let formData = app.toFormData(app.currentUser);
            axios.post("http://localhost/CRUD_vue/process.php?action=delete", formData).then(function (response) {
                app.currentUser = {};
                if (response.data.error) {
                    app.errorMsg = response.data.message;
                } else {
                    app.successMsg = response.data.message;
                    app.getAllUsers();
                }
            });
        },
        selectUser(user) {
            app.currentUser = user;
        },
        clearMsg() {
//            app.errorMsg = "";
//            app.successMsg = "";
        },
        toFormData(obj) {
            let fd = new FormData();
            for (let i in obj) {
                fd.append(i, obj[i]);
            }
            return fd;
        },

        checkForm() {
            this.showAddModal = true;
            this.errors = [];
//            console.log('Entre dans le checkform');
            cname = document.getElementById('helpname');
            cemail = document.getElementById('helpemail');
            cphone = document.getElementById('helpphone');

            if (!this.newUser.name) {
                this.errors.push("Name required.");
//                console.log("Name required.");
                cname.textContent = "Le nom est obligatoire";
                document.getElementById("adname").classList.add("is-invalid");
            } else {
                cname.textContent = "Le nom est correct";
//                console.log("Le nom est correct");
                document.getElementById("adname").classList.remove("is-invalid");
            }
            if (this.newUser.name.length < 2) {
                this.errors.push("Name too short.");
//                console.log("Name too short.");
                cname.textContent = "Le nom doit avoir au moins deux caratères";
                document.getElementById("adname").classList.add("is-invalid");
            }
            if (!this.newUser.email) {
                this.errors.push('Email required.');
//                console.log('Email required.');
                cemail.textContent = "L'Email est obligatoire";
                document.getElementById("ademail").classList.add("is-invalid");
            } else if (!this.validEmail(this.newUser.email)) {
                this.errors.push('Valid email required.');
//                console.log('Valid email required.');
                cemail.textContent = "Attention l'email n'est pas valide";
                document.getElementById("ademail").classList.add("is-invalid");
            } else {
                cemail.textContent = "L'email est correct";
//                console.log("L'email est correct");
                document.getElementById("ademail").classList.remove("is-invalid");
            }
            if (!this.validNumberPhone(this.newUser.phone)) {
                this.errors.push('Phone number must have 10 digit');
//                console.log('Phone number must have 10 digit');
                cphone.textContent = 'Le numéro de téléphone doit contenir 10 chiffres';
                document.getElementById("adphone").classList.add("is-invalid");
            } else {
                cphone.textContent = 'Le numéro de téléphone est correct';
//                console.log('Le numéro de téléphone est correct');
                document.getElementById("adphone").classList.remove("is-invalid");
            }

//            e.preventDefault();
//            e.stopPropagation();
//            console.log('errors : ', this.errors);

            if (this.errors.length == 0) {
                document.getElementById("adname").classList.remove("is-invalid");
                document.getElementById("ademail").classList.remove("is-invalid");
                document.getElementById("adphone").classList.remove("is-invalid");
                this.showAddModal = false;
                this.addUser();
                return true;
            }

        },
        validEmail: function (email) {
//            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//            return re.test(email);
            var regex = new RegExp(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i);

            // Definition de la variable booleene match
            var match = false;

            // Test sur le motif
            if (regex.test(email))
            {
                match = true;
            } else
            {
                match = false;
            }

            // On renvoie match
            return match;
        },
        validNumberPhone: function (phone) {
//            let re = /^0[1-68](((\.[0-9]{2}){4})|((\-[0-9]{2}){4})|(([0-9]{2}){4}))$/;
//            return re.test(phone);
//            let parsephone = parseInt(phone, 10);
//            if (isNaN(parsephone)) {
//                console.log(parsephone + ' Phone est bien un chiffre');
//            } else {
//                console.log(parsephone + " Phone n'est pas un chiffre");
//            }
            // Definition du motif a matcher
            var regex = new RegExp(/^(01|02|03|04|05|06|08|09)[0-9]{8}/i);

            // Definition de la variable booleene match
            var match = false;

            // Test sur le motif
            if (regex.test(phone))
            {
                match = true;
            } else
            {
                match = false;
            }

            // On renvoie match
            return match;
        }

    }
});
