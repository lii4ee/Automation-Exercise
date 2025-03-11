const { test, expect } = require('@playwright/test');


test('API 1: Get All Products List', async ({ request }) => {
    const response = await request.get('https://automationexercise.com/api/productsList');
    const userData = await response.json();
    const responseCode = await userData.responseCode;
    expect(responseCode).toBe(200);
});

test('API 2: POST To All Products List', async ({ request }) => {
    const response = await request.post('https://automationexercise.com/api/productsList');
    const productsList = await response.json();
    const resCode = await productsList.responseCode;
    expect(resCode).toBe(405);
});

test('API 3: Get All Brands List', async ({ request }) => {
    const response = await request.get('https://automationexercise.com/api/brandsList');
    const productsList = await response.json();
    const resCode = await productsList.responseCode;
    expect(resCode).toBe(200);
});

test('API 4: PUT To All Brands List', async ({ request }) => {
    const response = await request.put('https://automationexercise.com/api/brandsList');
    const productsList = await response.json();
    const resCode = await productsList.responseCode;
    expect(resCode).toBe(405);
});

test('API 5: POST To Search Product', async ({ request }) => {
    const form = { search_product: "shirt" };
    const response = await request.post('https://automationexercise.com/api/searchProduct', { form: form });
    const productsList = await response.json();
    // console.log(productsList);
    const resCode = productsList.responseCode;
    expect(resCode).toBe(200);
});

test('API 6: POST To Search Product without search_product parameter', async ({ request }) => {
    const response = await request.post('https://automationexercise.com/api/searchProduct');
    const productsList = await response.json();
    const resCode = productsList.responseCode;
    expect(resCode).toBe(400);
});

test('API 11: POST To Create/Register User Account', async ({ request }) => {
    const form = {
        name: "exampleName1",
        email: "exampleEamil_eg2@email.com",
        password: "abc123",
        firstname: "firstName",
        lastname: "lastName",
        address1: "old address",
        country: "Mars",
        state: "depressed state of mind",
        city: "Electricity",
        zipcode: "666",
        mobile_number: "9666696666"
    };
    const response = await request.post('https://automationexercise.com/api/createAccount', { form: form });
    const productsList = await response.json();
    const resCode = productsList.responseCode;
    expect(resCode).toBe(201);
});


test('API 7: POST To Verify Login with valid details', async ({ request }) => {
    const form = { email: "exampleEamil_eg2@email.com", password: "abc123", };
    const response = await request.post('https://automationexercise.com/api/verifyLogin', { form: form });
    const productsList = await response.json();
    const resCode = productsList.responseCode;
    expect(resCode).toBe(200);
});

test('API 8: POST To Verify Login without email parameter', async ({ request }) => {
    const form = { password: "abc123", };
    const response = await request.post('https://automationexercise.com/api/verifyLogin', { form: form });
    const productsList = await response.json();
    const resCode = productsList.responseCode;
    expect(resCode).toBe(400);
});

test('API 9: DELETE To Verify Login', async ({ request }) => {
    const response = await request.delete('https://automationexercise.com/api/verifyLogin');
    const productsList = await response.json();
    const resCode = productsList.responseCode;
    expect(resCode).toBe(405);
});

test('API 10: POST To Verify Login with invalid details', async ({ request }) => {
    const form = {
        email: "hello",
        password: "abc123"
    };
    const response = await request.post('https://automationexercise.com/api/verifyLogin', { form: form });
    const productsList = await response.json();
    const resCode = productsList.responseCode;
    expect(resCode).toBe(404);
});

test('API 13: PUT METHOD To Update User Account', async ({ request }) => {
    const form = {
        email: "exampleEamil_eg2@email.com", password: "abc123", birth_date: "31", birth_month: "02", birth_year: "1947",
    };
    const response = await request.put('https://automationexercise.com/api/updateAccount', { form: form });
    const productsList = await response.json();
    const resCode = productsList.responseCode;
    expect(resCode).toBe(200);
});

test('API 14: GET user account detail by email', async ({ request }) => {
    const params = new URLSearchParams({ email: 'exampleEamil_eg2@email.com' });
    const url = `https://automationexercise.com/api/getUserDetailByEmail?${params.toString()}`;
    const response = await request.get(url);
    const productsList = await response.json();
    const resCode = productsList.responseCode;
    expect(resCode).toBe(200);
});

test('API 12: DELETE METHOD To Delete User Account', async ({ request }) => {
    const form = {
        email: "exampleEamil_eg2@email.com",
        password: "abc123",
    };
    const response = await request.delete('https://automationexercise.com/api/deleteAccount', { form: form });
    const productsList = await response.json();
    const resCode = productsList.responseCode;
    expect(resCode).toBe(200);
});