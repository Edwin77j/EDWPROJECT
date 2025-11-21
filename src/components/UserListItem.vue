<script>
export default {
  props: ["user"],

  methods: {
    editUser() {
      this.$emit("edit", this.user);
    },
    deleteUser() {
      this.$emit("delete", this.user.id);
    }
  }
};
</script>

<template>
  <li>
    {{ user.name }} - {{ user.email }}
    <button @click="editUser">Editar</button>
    <button @click="deleteUser">Eliminar</button>
  </li>
</template>
