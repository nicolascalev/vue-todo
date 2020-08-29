import axios from 'axios'

var api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export default {
    async find(model) {
        try {
            if(!model) throw 'Must send model param'
            var { data } = await api.get(`/${model}`)
            return data;
        } catch (err) {
            return Promise.reject(err)
        }
    },
    
    async findOne(model, id) {
        try {
            if(!model || !id) throw 'Must send model and id params'
            var { data } = await api.get(`/${model}/${id}`)
            return data;
        } catch (err) {
            return Promise.reject(err)
        }
    },

    async findPopulate(model, id, association) {
        try {
            if(!model || !id || !association) throw 'Missing params'
            var { data } = await api.get(`/${model}/${id}/${association}`)
            return data;
        } catch (err) {
            return Promise.reject(err)
        }
    }
}