interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
}

interface ProductApiResponse {
    products: Product[];
}

// Import the fetchHelper function
import {fetchHelper} from "../utils/fetchHelper";

// Simple assertion function
function assert(condition: boolean, message: string) {
    if (!condition) {
        throw new Error(`Assertion failed: ${message}`);
    }
}

async function testFetchHelperSuccess() {
    const { data, error } = await fetchHelper<ProductApiResponse>(
        'https://dummyjson.com/products/category/smartphones'
    );

    assert(error === null, 'Expected no error');
    assert(data !== null, 'Expected data to be returned');
    assert(data?.products.length > 0, 'Expected some products in the data');
    console.log(data);
}

async function testFetchHelperFailure() {
    const { data, error } = await fetchHelper<ProductApiResponse>(
        'https://dummyjson.com/nonexistent-url'
    );

    assert(data === null, 'Expected no data on failure');
    assert(error !== null, 'Expected an error message on failure');
    assert(error.startsWith('HTTP error!'), 'Expected an HTTP error message');
}

async function runTests() {
    try {
        await testFetchHelperSuccess();
        console.log('testFetchHelperSuccess passed');
    } catch (error) {
        console.error('testFetchHelperSuccess failed:', error);
    }

    try {
        await testFetchHelperFailure();
        console.log('testFetchHelperFailure passed');
    } catch (error) {
        console.error('testFetchHelperFailure failed:', error);
    }
}

runTests();
