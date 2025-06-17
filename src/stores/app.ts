import { defineStore } from 'pinia'
import schema from '../../schema.json'

interface State {
  schema : any
  initials: any
}

export const useAppStore = defineStore('app', {
  state: (): State => ({
    schema,
    initials: schema.basics.name.split(' ').map(name => name.charAt(0)).join(''),
  }),
})
