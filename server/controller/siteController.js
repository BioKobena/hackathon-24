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
    const { identifiant, password } = req.body;

    try {
        const site = await Site.findUnique({
            where: {
                identifiant
            }
        });

        if (!site || password !== site.password) {
            return res.status(401).json({ success: false, message: 'Identifiant ou mot de passe incorrect' });
        }

        res.json({ success: true, message: 'Connexion réussie', site });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Erreur lors de l\'authentification' });
    }
};
