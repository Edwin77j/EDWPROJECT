<script>
import { UserService } from '../services/UserService';
import UserForm from '../components/UserForm.vue';
import UserListItem from '../components/UserListItem.vue';

export default {
  components: { UserForm, UserListItem },

  data() {
    return {
      userService: new UserService(),
      users: [],
      editingUser: null
    };
  },

  created() {
    this.loadUsers();
  },

  methods: {
    loadUsers() {
      this.users = this.userService.getAllUsers();
    },

    handleCreate(userData) {
      this.userService.createUser(userData);
      this.loadUsers();
    },

    handleEdit(user) {
      this.editingUser = { ...user };
    },

    handleUpdate(id, updatedData) {
      this.userService.updateUser(id, updatedData);
      this.editingUser = null;
      this.loadUsers();
    },

    handleDelete(id) {
      this.userService.deleteUser(id);
      this.loadUsers();
    }
  }
};
</script>

<template>
  <div>
    <h1>Gestión de Usuarios</h1>

    <UserForm 
      :user="editingUser"
      @create="handleCreate"
      @update="handleUpdate" 
    />

    <ul>
      <UserListItem
        v-for="u in users"
        :key="u.id"
        :user="u"
        @edit="handleEdit"
        @delete="handleDelete"
      />
    </ul>
  </div>
</template>
