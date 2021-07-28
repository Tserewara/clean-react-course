export class InvalidCredentialsError extends Error {
  constructor () {
    super('Credentiais inválidas')
    this.name = 'InvalidCredentialsError'
  }
}
