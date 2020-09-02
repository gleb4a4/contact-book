<template>
  <div>
    <div class="modal">
      <div class="row">
        <div class="Header">
          <h1>Добавление Контакта</h1>
           <div>
             <input type="text" placeholder="FirstName">
             <input type="text" placeholder="LastName">
           </div>
          <div class="footer">
            <div class="botbutom">
              <button type="submit" class="btn-exit" @click="Toggle_Modal">
                Cancel
              </button>
              <button type="submit" class="btn-send">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ModalAdd",

  methods: {
    ...mapActions(["Toggle_Modal"]),
    CloseModal() {
      this.Toggle_Modal();
    }
  }
};
</script>

<style scoped>
.modal {
  z-index: 1096;
  width: 45%;
  height: 45%;
  display: block;
  background-color: rgba(120, 120, 120, 0.7);
  margin-left: 27.5%;
  margin-top: 13%;
  color: lightgray;
}
.modal h1 {
  font-size: 2vw;
  text-transform: uppercase;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.8);
}

.form-group input {
  width: 80%;
}
.row {
  justify-content: center;
  padding: 8px;
}
.btn-exit {
  font-size: 18px;
  border: none;
  width: 40%;
  padding: 10px;
  font-weight: 700;
  outline: none;
  border-radius: 40px;
  float: left;
}
.btn-send {
  font-size: 18px;
  border: none;
  width: 40%;
  padding: 10px;
  font-weight: 700;
  text-align: center;
  outline: none;
  border-radius: 40px;
  float: right;
}
.col label {
  font-size: 0.8vw;
}
.col small {
  font-size: 0.6vw;
}
.contact-form input {
  border: 0 none;
  border-bottom: 1px solid #b9b9b8;
  width: 100%;
  font-family: "Lato", sans-serif;
  font-size: 16px;
  line-height: 32px;
  padding: 5px;
  margin-bottom: 45px;
  outline: none;
  background: black;
}
.contact-form .btn-send:hover {
  background-color: #e6a700;
}
.contact-form .btn-exit:hover {
  background-color: #e64249;
}
.contact-form label {
  color: rgb(255, 255, 51);
  position: absolute;
  top: 8px;
  left: 20px;
  transition: 0.28s;
}
.contact-form input {
  color: yellow;
}
.contact-form input:focus + label {
  top: -20px;
  font-size: 12px;
}
.contact-form input:invalid {
  box-shadow: none;
}
.contact-form input:valid {
  border-bottom: 1px solid #161613;
}
.contact-form input:valid + label {
  top: -20px;
  font-size: 12px;
}
.contact-form input:invalid:not(:focus):not(:placeholder-shown) {
  border-bottom: 1px solid #d3362a;
}
.contact-form input:invalid:not(:focus):not(:placeholder-shown) + label {
  top: -20px;
  font-size: 12px;
}
.contact-form input:invalid:focus:not(:placeholder-shown) ~ .requirements {
  max-height: 20px;
}
.contact-form .requirements {
  position: absolute;
  bottom: 20px;
  padding: 0 5px;
  max-height: 0;
  transition: 0.28s;
  overflow: hidden;
  font-size: 14px;
  line-height: 20px;
  color: #d3362a;
}
@media (max-width: 1300px) and (max-height: 1000px) {
  .modal {
    height: 55%;
  }
}
@media (max-height: 780px) {
  .modal {
    height: 65%;
  }
}
@media (max-width: 1150px) {
  .col label {
    font-size: 1vw;
  }
  .col small {
    font-size: 0.9vw;
  }
  .col input {
    height: 3vw;
  }
  .col select {
    height: 3vw;
  }
}
.col input {
  height: 4vh;
}
@media (max-width: 820px) {
  ::-webkit-input-placeholder {
    font-size: 1.5vw;
  }
}
@media (max-width: 820px) {
  .modal {
    width: 75%;
    height: 75%;
    margin-left: 12.5%;
    margin-top: 30%;
  }
}
@media (max-height: 520px) {
  .modal {
    height: 70%;
  }
}
</style>
