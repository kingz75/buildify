import {
  Client,
  Account,
  Databases,
  Storage,
  Avatars,
  Users,
} from 'node-appwrite'

const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || ''
const endpoint =
  process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1'

export function createAdminClient() {
  const client = new Client()
    .setEndpoint(endpoint)
    .setProject(projectId)
    .setKey(process.env.APPWRITE_API_KEY || '')

  return {
    client,
    account: new Account(client),
    databases: new Databases(client),
    storage: new Storage(client),
    avatars: new Avatars(client),
    users: new Users(client),
  }
}

export async function createSessionClient(sessionSecret: string) {
  const client = new Client()
    .setEndpoint(endpoint)
    .setProject(projectId)
    .setSession(sessionSecret)

  return {
    client,
    account: new Account(client),
    databases: new Databases(client),
    storage: new Storage(client),
    avatars: new Avatars(client),
  }
}
