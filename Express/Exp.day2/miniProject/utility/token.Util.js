import crypto from 'crypto'

export const genertaeToken=()=>{
  return crypto.randomBytes(16).toString("hex")
}

export const validateToken=(token)=>{
  return token.length === 32;// one byte = 2hex value
} 
