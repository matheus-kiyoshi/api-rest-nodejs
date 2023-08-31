import UserRepository from '../repositories/UserRepository.js'

class UserController {

  async index(req, res) {
    const users = await UserRepository.findAll()
    res.json(users)
  }

  async show(req, res) {
    const id = req.params.id
    const showUser = await UserRepository.findById(id)
    res.json(showUser)
  }

  async store(req, res) {
    const user = req.body
    const storeUser = await UserRepository.create(user)
    res.json(storeUser)
  }

  async update(req, res) {
    const id = req.params.id
    const user = req.body
    const updateUser = await UserRepository.update(user, id)
    res.json(updateUser)
  } 

  async delete(req, res) {
    const id = req.params.id
    const deleteUser = await UserRepository.delete(id)
    res.json(deleteUser)
  }
}

export default new UserController()
