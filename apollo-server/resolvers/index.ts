import { Category } from "../../interfaces";

const API_URL = 'http://localhost:4000/'

export const resolvers = {
    Query: {
        // aici primul argument nu ne intereseaza, ar fi Query, il denumim _ (sau root)
        product: async (_, args) => {
            try {
                const resp = await fetch(`${API_URL}products/${args.id}`);
                let product = await resp.json();
                return product
            } catch (error) {
                throw error;
            }
        },
        products: async () => {
            try {
                const resp = await fetch(`${API_URL}products`);
                let products = await resp.json();
                return products
            } catch (error) {
                throw error;
            }
        },
        category: async (_, args) => {
            try {
                const resp = await fetch(`${API_URL}categories/${args.id}`);
                let category = await resp.json();
                return category
            } catch (error) {
                throw error;
            }
        },


        // getCategories: async (): Promise<Category[]> => {
        //     try {
        //         const resp = await fetch(`${API_URL}categories`);
        //         let categories: Category[] = await resp.json();
        //         return categories
        //     } catch (error) {
        //         throw error;
        //     }
        // },
        // getCategory: async (_: any, args: { name: string }): Promise<Category> => {
        //     try {
        //         const resp = await fetch(`${API_URL}categories?name=${args.name}`);
        //         let category: Category = await resp.json();
        //         return category[0]
        //     } catch (error) {
        //         throw error;
        //     }
        // },
        // getCategoryById: async (_: any, args: { id: string }): Promise<Category> => {
        //     try {
        //         const resp = await fetch(`${API_URL}categories/${args.id}`);
        //         let category: Category = await resp.json();
        //         return category[0]
        //     } catch (error) {
        //         throw error;
        //     }
        // }

    },

    // aici punem campurile ce trebuie sa le rezolvam pt Produs
    Product: {
        category: async (parent) => {
            try {
                const resp = await fetch(`${API_URL}categories/${parent.category_id}`);
                let categories = await resp.json();
                return categories
            } catch (error) {
                throw error;
            }
        },
    },

    Category: { 
        products: async (parent) => {   
            try {
                const resp = await fetch(`${API_URL}products?category_id=${parent.id}`);
                let products = await resp.json();
                return products
            } catch (error) {
                throw error;
            }
        },
    },

};
