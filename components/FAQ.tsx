
const faqs = [
    {
        id: 1,
        question: "What makes Infineteck different from other software companies?",
        answer: "We combine creative branding, AI automation, and industry-specific expertise to deliver end-to-end solutions. Unlike generic agencies, we focus on scalable growth, ensuring your website, app, or marketing strategy evolves with your business.",
    },
    {
        id: 2,
        question: "How long does it take to develop a website or app?",
        answer: "Timelines vary based on complexity, but most projects are delivered in 4-8 weeks. We prioritize quality and collaboration, keeping you updated at every stage to ensure deadlines align with your goals.",
    },
    {
        id: 3,
        question: "What's the cost of your services?",
        answer: "We offer tailored pricing to match your budget and needs. Whether you’re a startup or enterprise, our solutions are designed to maximize ROI—transparent quotes with no hidden fees.",
    },
    {
        id: 4,
        question: "Can AI automation work for small businesses?",
        answer: "Absolutely! Our AI solutions streamline tasks like customer support, data analysis, and inventory management, freeing your team to focus on growth. We customize tools to fit businesses of all sizes.",
    },
    {
        id: 5,
        question: "How do you measure success in digital marketing?",
        answer: "We track real metrics: traffic growth, conversion rates, ROI, and social engagement. Monthly reports and strategy tweaks ensure your campaigns stay ahead of competitors.",
    },
]

const FAQ = () => {
  return (
    <div className="py-[5%] transition-all duration-300 ease-in-out">
        <h1 className='text-2xl lg:text-5xl font-bold text-center py-[5%]'>Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-color to-primary-color"> Questions</span></h1>
        <ul className="max-w-3xl mx-auto divide-y rounded-xl shadow-lg shadow-secondary-color">
    <li>
        {faqs.map((faq) => 
        <details key={faq.id} className="group group-open:transition duration-500 ease-in border-t-2 border-primary-color rounded-lg">
            <summary className="flex items-center gap-3 px-4 py-5 font-medium marker:content-none hover:cursor-pointer">
                <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" stroke='blue'
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                    </path>
                </svg>
                <span className="text-lg lg:text-xl">{faq.question}</span>
            </summary>

            <article className="px-4 pb-4">
                <p>
                   {faq.answer}
                </p>
            </article>
        </details>
        )}
    </li>

</ul>
    </div>
  )
}

export default FAQ