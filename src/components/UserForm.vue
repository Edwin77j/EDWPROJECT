<script>
import { isValidEmail } from '../helpers/validator';

export default {
  props: ["user"],

  data() {
    return {
      name: this.user?.name || "",
      email: this.user?.email || ""
    };
  },

  watch: {
    user(n) {
      if (n) {
        this.name = n.name;
        this.email = n.email;
      }
    }
  },

  methods: {
    submitForm() {
      if (!this.name || !this.email) {
        alert("Todos los campos son obligatorios");
        return;
      }

      if (!isValidEmail(this.email)) {
        alert("Email inválido");
        return;
      }

      if (this.user) {
        // Editando
        this.$emit("update", this.user.id, {
          name: this.name,
          email: this.email
        });
      } else {
        // Creando
        this.$emit("create", {
          name: this.name,
          email: this.email
        });
      }

      this.name = "";
      this.email = "";
    }
  }
};
</script>

<template>
  <form @submit.prevent="submitForm">
    <input v-model="name" placeholder="Nombre" />
    <input v-model="email" placeholder="Correo" />
    <button type="submit">{{ user ? "Actualizar" : "Crear" }}</button>
  </form>
</template>
