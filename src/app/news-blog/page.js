import Home3Footer from '@/components/Footer/Home3Footer'
import Header3 from '@/components/header/Header4'
import Link from 'next/link'
import React from 'react'

const NewsIsightPage = () => {
    return (
        <>
            <Header3 />
            <br></br>
            <br></br>
            <br></br>
            {/* Breadcrumb Section Start */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-content">
                                <h1>News &amp; Blog</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        News &amp; Blog
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb Section End */}
            {/* News & Insight Page Start */}
            <div className="news-insight-page mb-130">
                <div className="container">
                    <div className="row gy-5 justify-content-between mb-70">
                        <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="blog-card2">
                                <div className="row align-items-center g-xl-4 g-lg-2 g-md-4 g-sm-3 g-4">
                                    <div className="col-lg-6 col-md-5 col-sm-6">
                                        <Link href="/news-blog/details" className="blog-img">
                                            <img src="/assets/img/home3/blog-img1.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="col-lg-6 col-md-7 col-sm-6">
                                        <div className="blog-content-wrap">
                                            <ul className="blog-meta">
                                                <li><Link href="/news-blog">Creative Design</Link></li>
                                                <li>
                                                    <svg width={30} height={6} viewBox="0 0 30 6" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM25 3.5L30 5.88675V0.113249L25 2.5V3.5ZM4.5 3.5H25.5V2.5H4.5V3.5Z" />
                                                    </svg>
                                                </li>
                                                <li className="blog-date"><Link href="/news-blog">02 April, 2023</Link></li>
                                            </ul>
                                            <h3><Link href="/news-blog/details">Celebrates Major Milestone in Digital Services.</Link></h3>
                                            <Link href="/news-blog/details" className="primary-btn3 three transparent btn-hover">
                                                Read More
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <span />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="blog-card2">
                                <div className="row align-items-center g-xl-4 g-lg-2 g-md-4 g-sm-3 g-4">
                                    <div className="col-lg-6 col-md-5 col-sm-6">
                                        <Link href="/news-blog/details" className="blog-img">
                                            <img src="/assets/img/home3/blog-img2.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="col-lg-6 col-md-7 col-sm-6">
                                        <div className="blog-content-wrap">
                                            <ul className="blog-meta">
                                                <li><Link href="/news-blog">Design Trends</Link></li>
                                                <li>
                                                    <svg width={30} height={6} viewBox="0 0 30 6" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM25 3.5L30 5.88675V0.113249L25 2.5V3.5ZM4.5 3.5H25.5V2.5H4.5V3.5Z" />
                                                    </svg>
                                                </li>
                                                <li className="blog-date"><Link href="/news-blog">05 April, 2023</Link></li>
                                            </ul>
                                            <h3><Link href="/news-blog/details">Powerful Impact in Digital Marketplace in One Era.</Link></h3>
                                            <Link href="/news-blog/details" className="primary-btn3 three transparent btn-hover">
                                                Read More
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <span />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="blog-card2">
                                <div className="row align-items-center g-xl-4 g-lg-2 g-md-4 g-sm-3 g-4">
                                    <div className="col-lg-6 col-md-5 col-sm-6">
                                        <Link href="/news-blog/details" className="blog-img">
                                            <img src="/assets/img/home3/blog-img3.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="col-lg-6 col-md-7 col-sm-6">
                                        <div className="blog-content-wrap">
                                            <ul className="blog-meta">
                                                <li><Link href="/news-blog">Brutalism</Link></li>
                                                <li>
                                                    <svg width={30} height={6} viewBox="0 0 30 6" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM25 3.5L30 5.88675V0.113249L25 2.5V3.5ZM4.5 3.5H25.5V2.5H4.5V3.5Z" />
                                                    </svg>
                                                </li>
                                                <li className="blog-date"><Link href="/news-blog">08 September, 2024</Link></li>
                                            </ul>
                                            <h3><Link href="/news-blog/details">Essential Social Media Strategies for-2024.</Link></h3>
                                            <Link href="/news-blog/details" className="primary-btn3 three transparent btn-hover">
                                                Read More
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <span />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="blog-card2">
                                <div className="row align-items-center g-xl-4 g-lg-2 g-md-4 g-sm-3 g-4">
                                    <div className="col-lg-6 col-md-5 col-sm-6">
                                        <Link href="/news-blog/details" className="blog-img">
                                            <img src="/assets/img/innerpages/blog-img1.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="col-lg-6 col-md-7 col-sm-6">
                                        <div className="blog-content-wrap">
                                            <ul className="blog-meta">
                                                <li><Link href="/news-blog">Bento Grid</Link></li>
                                                <li>
                                                    <svg width={30} height={6} viewBox="0 0 30 6" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM25 3.5L30 5.88675V0.113249L25 2.5V3.5ZM4.5 3.5H25.5V2.5H4.5V3.5Z" />
                                                    </svg>
                                                </li>
                                                <li className="blog-date"><Link href="/news-blog">02 Octeber, 2023</Link></li>
                                            </ul>
                                            <h3><Link href="/news-blog/details">Branding in the Digital Age Key Elements to Consider.</Link></h3>
                                            <Link href="/news-blog/details" className="primary-btn3 three transparent btn-hover">
                                                Read More
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <span />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="blog-card2">
                                <div className="row align-items-center g-xl-4 g-lg-2 g-md-4 g-sm-3 g-4">
                                    <div className="col-lg-6 col-md-5 col-sm-6">
                                        <Link href="/news-blog/details" className="blog-img">
                                            <img src="/assets/img/innerpages/blog-img2.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="col-lg-6 col-md-7 col-sm-6">
                                        <div className="blog-content-wrap">
                                            <ul className="blog-meta">
                                                <li><Link href="/news-blog">Bento Grid</Link></li>
                                                <li>
                                                    <svg width={30} height={6} viewBox="0 0 30 6" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM25 3.5L30 5.88675V0.113249L25 2.5V3.5ZM4.5 3.5H25.5V2.5H4.5V3.5Z" />
                                                    </svg>
                                                </li>
                                                <li className="blog-date"><Link href="/news-blog">05 Octeber, 2023</Link></li>
                                            </ul>
                                            <h3><Link href="/news-blog/details">Navigating the Challenges of E-commerce in -2025.</Link></h3>
                                            <Link href="/news-blog/details" className="primary-btn3 three transparent btn-hover">
                                                Read More
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <span />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="blog-card2">
                                <div className="row align-items-center g-xl-4 g-lg-2 g-md-4 g-sm-3 g-4">
                                    <div className="col-lg-6 col-md-5 col-sm-6">
                                        <Link href="/news-blog/details" className="blog-img">
                                            <img src="/assets/img/home3/blog-img4.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="col-lg-6 col-md-7 col-sm-6">
                                        <div className="blog-content-wrap">
                                            <ul className="blog-meta">
                                                <li><Link href="/news-blog">Web Design</Link></li>
                                                <li>
                                                    <svg width={30} height={6} viewBox="0 0 30 6" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM25 3.5L30 5.88675V0.113249L25 2.5V3.5ZM4.5 3.5H25.5V2.5H4.5V3.5Z" />
                                                    </svg>
                                                </li>
                                                <li className="blog-date"><Link href="/news-blog">08 November, 2024</Link></li>
                                            </ul>
                                            <h3><Link href="/news-blog/details">The Power of Influencer Marketing Insights and Tips.</Link></h3>
                                            <Link href="/news-blog/details" className="primary-btn3 three transparent btn-hover">
                                                Read More
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <span />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* News & Insight Page End */}
            <Home3Footer />
        </>
    )
}

export default NewsIsightPage
