import { blogs } from "../assets/data"

const Blog = () => {
    return (
        <section className="max-padd-container pb-16">
            {/* Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {blogs.slice(0, 4).map((blog) => (
                    <div key={blog.title} className="relative">
                        <img src={blog.image} alt="blogImg" className="rounded-xl" />

                        {/* Info */}
                        <p className="medium-14 mt-6">{blog.category}</p>
                        <h5 className="h5 pr-4 mb-1">{blog.title}</h5>
                        <p>
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system,
                            and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness
                        </p>
                        <button className="underline mt-2 bold-14">Continue reading</button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Blog