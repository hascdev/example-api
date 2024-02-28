import jwt from 'jsonwebtoken';

class JwtService {

    /**
     * @throws JsonWebTokenError
     */
    sign(payload, hash) {
        return jwt.sign(payload, this.createSecretString(hash), { expiresIn: process.env.TOKEN_LIFE } );
    }

    /**
     * @throws JsonWebTokenError
     */
    verify(token, hash) {
        return jwt.verify(token, this.createSecretString(hash));
    }

    decode(token) {
        return jwt.decode(token);
    }

    createSecretString(hash) {
        return `${process.env.TOKEN_SECRET}${hash}`;
    }
}

export default new JwtService();