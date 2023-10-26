import { config as configDotenv } from 'dotenv'

import { run } from './utils/run.mjs'

// load the .env file
configDotenv()

export const handler: AWSLambda.Handler<
  void,
  void
> = async (): Promise<void> => {
  run()
  return Promise.resolve()
}
