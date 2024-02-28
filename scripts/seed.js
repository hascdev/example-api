import pool from "../database/index.js";

const seedUsers = async () => {

    try {

        await pool.query(`CREATE TABLE IF NOT EXISTS users (
                id uuid DEFAULT gen_random_uuid() PRIMARY KEY, 
                username VARCHAR(255) NOT NULL, 
                password TEXT NOT NULL, 
                hash TEXT NOT NULL 
            );
        `);
        
        console.log(`Created "users" table`);

        await pool.query(`INSERT INTO users ( id, username, password, hash ) 
            VALUES 
                ('ca61da8c-938a-48a6-8eb6-55aa08cd1b08', 'admin', 'passwd', 'scwigklqz6kly2mkmf4jgvv539y260'), 
                ('fe2af584-8576-4d0e-b10d-6ec970732f8e', 'demo', 'passwd', 'qu25u5qfvi5kcdu0t4eu7pi33ebhi8') 
            ON CONFLICT (id) DO NOTHING;
        `);

        console.log(`Seeded "users"`);

    } catch (error) {
        console.error("Error seeding users", error.message);
        throw error;
    }
}

const seedProfiles = async () => {

    try {

        await pool.query(`CREATE TABLE IF NOT EXISTS profiles (
                id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
                user_id UUID REFERENCES users(id),
                first_name VARCHAR NOT NULL,
                last_name VARCHAR NOT NULL,
                email VARCHAR NOT NULL,
                phone VARCHAR
            );
        `);
        
        console.log(`Created "profiles" table`);

        await pool.query(`INSERT INTO profiles ( id, user_id, first_name, last_name, email, phone) 
            VALUES 
                ('141aefe8-f553-43b9-bfbf-91361e83b15e', 'ca61da8c-938a-48a6-8eb6-55aa08cd1b08', 'John', 'Smith', 'john.smith@example.com',  '408-237-2345'), 
                ('351c1afe-21b2-486c-951b-66bc9e852530', 'fe2af584-8576-4d0e-b10d-6ec970732f8e', 'Jane', 'Smith', 'jane.smith@example.com', '408-237-2344')
            ON CONFLICT (id) DO NOTHING;
        `);

        console.log(`Seeded "profiles"`);

    } catch (error) {
        console.error("Error seeding profiles", error.message);
        throw error;
    }
}

await seedUsers();
await seedProfiles();