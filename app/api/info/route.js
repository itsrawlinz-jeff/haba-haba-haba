import { query } from "@/lib/db";
import mysql from "mysql2/promise";

export async function GET(request) {
    const users = await query({
        query: "SELECT * FROM users",
        values: [],
    });

    let data = JSON.stringify(users);
    return new Response(data, {
        status: 200,
    });
}

export async function POST(req, res) {
    const body = await req.json();
    // console.log("body1 ", body);

    const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        // port: process.env.MYSQL_PORT,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD
    })

    try{
        await connection.query(`INSERT INTO membership VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                body.name, body.email, body.country, body.phoneNumber, body.dateOfBirth, body.yourgender, body.preferredPartnerGender, body.relationshipStatus, body.smoke, body.drink, body.partnerDrinks, body.incomeBracket, body.ageBracket, body.chronicIllness, body.prefferedPackagePlan, body.habaPackageInstallmentPlan, body.membership
            ])
        // res.status(200).json({message: 'Submitted successfully'})
        return new Response(JSON.stringify({
            message: "success",
            status: 200,
            user: req.body
        }));

    } catch (error) {
        console.log("error2 here ", error)
        return new Response(JSON.stringify({
            status: 500,
            data: error.message
        }));
        // res.status(400).json({message: error.message})
    }

}

export async function PUT(request) {

    try {
        const { id,name, email,country, phoneNumber, dateOfBirth, gender, preferredPartnerGender, relationshipStatus, smoke, drink, partnerDrinks, incomeBracket, ageBracket, chronicIllness, habaService, habaPackageInstallmentPlan } = await request.json();
        const updateusers = await query({
            query: "UPDATE users SET name = ?, email = ?, country = ?, phoneNumber = ?, dateOfBirth = ?, gender = ?, preferredPartnerGender = ?, relationshipStatus = ?, smoke = ?, drink = ?, partnerDrinks = ?, incomeBracket = ?, ageBracket = ?, chronicIllness = ?, habaService = ?, habaPackageInstallmentPlan = ? WHERE id = ?",
            values: [name,email,country, phoneNumber, dateOfBirth, gender,preferredPartnerGender, relationshipStatus, smoke, drink, partnerDrinks, incomeBracket, ageBracket, chronicIllness, habaService, habaPackageInstallmentPlan, id],
        });
        const result = updateusers.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const user = {
            id: id,
            name: name,
            email: email,
            country: country,
            phoneNumber: phoneNumber,
            dateOfBirth: dateOfBirth,
            gender: gender,
            preferredPartnerGender: preferredPartnerGender,
            relationshipStatus: relationshipStatus,
            smoke: smoke,
            drink: drink,
            partnerDrinks: partnerDrinks,
            incomeBracket: incomeBracket,
            ageBracket: ageBracket,
            chronicIllness: chronicIllness,
            habaService: habaService,
            habaPackageInstallmentPlan: habaPackageInstallmentPlan
        };
        return new Response(JSON.stringify({
            message: message,
            status: 200,
            user: user
        }));
    } catch (error) {
        return new Response(JSON.stringify({
            status: 500,
            data: error.message
        }));
    }

}


export async function DELETE(request) {

    try {
        const { id } = await request.json();
        const deleteUser = await query({
            query: "DELETE FROM users WHERE id = ?",
            values: [id],
        });
        const result = deleteUser.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const user = {
            id: id,
        };
        return new Response(JSON.stringify({
            message: message,
            status: 200,
            user: user
        }));
    } catch (error) {
        return new Response(JSON.stringify({
            status: 500,
            data: error.message
        }));
    }

}