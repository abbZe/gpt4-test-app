import { logo } from '../assets';

const Hero = () => {
    const openGitHubHandler = () => {
        window.open('https://github.com/abbze');
    };

    return (
        <header className="w-full flex justify-content items-center flex-col">
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <img src={logo} alt="logo" className="w-28 object-contain" />

                <button
                    type="button"
                    onClick={openGitHubHandler}
                    className="black_btn"
                >
                    GitHub
                </button>
            </nav>

            <h1 className="head_text">
                Summarize Articles with <br className="max-md:hidden" />
                <span className="orange_gradient">OpenAI GPT-4</span>
            </h1>
            <h2 className="desc">
                Simplify your articles with OpenAI GPT-4.
            </h2>
        </header>
    );
};

export default Hero;
