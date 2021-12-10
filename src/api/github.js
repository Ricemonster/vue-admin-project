import instance from '../utils/reuqest'

export function getAllcommit() {
    return instance.get('https://api.github.com/repos/Ricemonster/vue-admin-project/commits')
}