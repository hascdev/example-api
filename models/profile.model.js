import pool from "../database/index.js";

class ProfileModel {

    findByUserId = async (user_id) => {

        try {

            const result = await pool.query(
                `SELECT * FROM profiles WHERE user_id='${user_id}'`
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

export default new ProfileModel();