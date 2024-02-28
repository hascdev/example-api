import pool from "../database/index.js";

class UserModel {

    findByUsername = async (username) => {

        try {

            const result = await pool.query(
                `SELECT * FROM users WHERE username='${username}'`
            );

            if (result.rows.length > 0) {                
                return result.rows[0];
            }
            
            return null;
            
        } catch (error) {
            throw error;
        }
    }

    findById = async (id) => {

        try {

            const result = await pool.query(
                `SELECT * FROM users WHERE id='${id}'`
            );

            if (result.rows.length > 0) {                
                return result.rows[0];
            }
            
            return null;
            
        } catch (error) {
            throw error;
        }
    }
}

export default new UserModel();