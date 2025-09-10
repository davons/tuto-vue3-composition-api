<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const roles = ref('developer')
const skill = ref<string>('')
const skills = ref<string[]>([])

const errors = ref<Record<string, string>>({})

const handleSubmit = (e: Event) => {
  if (validate()) {
    console.warn('Form invalide', errors.value)
    return
  }
  console.log('Email:', email.value)
  console.log('Password: ', password.value)
  console.log('Role :', roles.value)
  console.log('Skills: ', skills.value)
}

const addSkills = (e) => {
  if (e.key === 'enter' && skill.value.trim() != '' && !skills.value.includes(skill.value)) {
    skills.value.push(skill.value)
  }

  skill.value = ''
}

const deleteSkill = (el: string) => {
  skills.value = skills.value.filter((item) => item !== el)
}

const validate = () => {
  errors.value = {}

  if (!email.value) {
    errors.value.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.value.email = 'Email is invalid'
  }

  if (!password.value) {
    errors.value.password = 'Password is required'
  } else if (password.value.length < 6) {
    errors.value.password = 'Password must be least 6 characters'
  }

  if (skills.value.length == 0) {
    errors.value.skill = 'At least one skill is required'
  }

  return Object.keys(errors.value).length === 0
}

const clearError = (field: keyof typeof errors.value) => {
  errors.value[field] = ''
}
</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit" novalidate>
      <label>
        Email
        <input
          v-model="email"
          type="email"
          name="email"
          @input="clearError('email')"
          placeholder="Email"
          aria-label="email"
          :aria-invalid="!!errors.email"
          aria-describedby="invalid-helper"
        />
        <small id="invalid-helper" v-if="errors.email"> {{ errors.email }} </small>
      </label>

      <label>
        Password
        <input
          v-model="password"
          type="password"
          name="password"
          @input="clearError('password')"
          placeholder="Password"
          aria-label="password"
          :aria-invalid="!!errors.password"
          aria-describedby="invalid-helper"
        />
        <small v-if="errors.password" id="invalid-helper"> {{ errors.password }} </small>
      </label>

      <label>
        Role
        <select v-model="roles" name="favorite-cuisine" aria-label="Role">
          <option value="developer">Web Dev</option>
          <option value="designer">Web Designer</option>
        </select>
      </label>

      <label>
        Skills
        <input
          v-model="skill"
          type="input"
          name="skill"
          @input="clearError('skill')"
          placeholder="Press enter to add skill"
          @keyup.enter="addSkills"
          :aria-invalid="!!errors.skill"
          aria-describedby="invalid-helper"
        />
        <small v-if="errors.skill" id="invalid-helper"> {{ errors.skill }} </small>
        <ul>
          <li v-for="(skill, index) in skills" :key="index">
            {{ skill }}
            <a href="#" @click="deleteSkill(skill)">Supprimer</a>
          </li>
        </ul>
      </label>

      <label>
        <input type="checkbox" name="english" checked />
        Accepter nos conditons et terms
      </label>

      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<style scoped></style>
