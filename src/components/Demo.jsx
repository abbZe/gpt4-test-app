import { useState, useEffect } from 'react';

import { copy, linkIcon, loader, tick } from '../assets';
import { useLazyGetSummaryQuery } from '../services/article.js';

const Demo = () => {
    const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
    const [article, setArticle] = useState({ url: '', summary: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { data } = await getSummary({ articleUrl: article.url });

        if (data?.summary) {
            const newArticle = { ...article, summary: data.summary };
            setArticle(newArticle);
            console.log(newArticle);
        }
    };

    return (
        <section className="mt-16 w-full max-w-x1">
            {/*search*/}
            <div className="flex flex-col w-full gap-2">
                <form
                    className="relative flex justify-center items-center"
                    onSubmit={handleSubmit}
                >
                    <img
                        src={linkIcon}
                        alt="link icon"
                        className="absolute left-3 my-0"
                    />
                    <input
                        type="url"
                        placeholder="enter a URL"
                        value={article.url}
                        onChange={(e) => {
                            setArticle({ ...article, url: e.target.value });
                        }}
                        required
                        className="url_input peer"
                    />

                    <button
                        type="submit"
                        className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
                    >
                        😎
                    </button>
                </form>
                {/*Browser URL history*/}
            </div>
            {/*Display results*/}
        </section>
    );
};

export default Demo;
