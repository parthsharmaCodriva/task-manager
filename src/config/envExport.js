import dotenv from 'dotenv'
dotenv.config()

export const Config = {
    port:process.env.PORT || 8000,
    db_uri:process.env.DB_URI

}