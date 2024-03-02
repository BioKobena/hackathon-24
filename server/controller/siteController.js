const Site = require('../lib/prisma').site

exports.createSite = async (req, res) => {
    const {
        identifiant,
        password,
        localite
    } = req.body

    try {
        const createSite = await Site.create({
            data: {
                identifiant,
                password,
                localite
            }
        })
        if (identifiant.length < 5) {
            return res.status(400).json({ error: 'L\'identifiant doit contenir au moins 5 caractères' })
        } else {
            res.json({ createSite })
        }
    } catch (error) {
        console.error(error)
        res.json("Rien à signaler")
    }

}

exports.siteAuth = async (req, res) => {
    const { password } = req.body;
    try {
        const siteAuth = await Site.findFirst({
            where: {
                password
            }
        });
        
        res.status(200).json({ success: true, message: 'Authentification réussie', siteAuth });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Erreur lors de l\'authentification' });
    }
};

