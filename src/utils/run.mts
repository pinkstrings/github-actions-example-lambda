import { addTwo } from './add-two.mjs'

export function run(): void {
  console.log('Starting...')

  // display the environment variable
  console.log('Got env var:', { SOME_ENV_VAR: process.env.SOME_ENV_VAR })

  // generate a random number between 0 and 100
  const num = Math.ceil(Math.random() * 100)

  console.log('Got random number:', { num })

  // add 2 to the random number
  const result = addTwo(num)

  // log the result
  console.log('addTwo result:', { result })
}
