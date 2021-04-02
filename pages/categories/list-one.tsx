import styles from '../../styles/Home.module.css'
import { GetServerSideProps } from "next";

import { gql } from "@apollo/client";
import { Category } from "../../interfaces";
import client, { ssrClient } from "../../apollo-client";

interface Props {
    categories?: Category[];
}

export default function Home({ categories }: Props) {
    return (
        <div className={styles.grid}>
            {categories.map(category => (
                <div key={category.id} className={styles.card}>
                    <h3>{category.id}</h3>
                    <p>
                        {category.name}
                    </p>
                </div>
            ))}
        </div>
    )
}

const getCategories = gql`
  query {
    getCategories {
      id
      name
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async () => {
    const { data }: { data: { getCategories: Category[] } } =
        await ssrClient.query({
            query: getCategories
        });

    return {
        props: {
            categories: data.getCategories,
        },
    };
}
