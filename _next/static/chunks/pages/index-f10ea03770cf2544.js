(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8312: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return s(6092)
            }])
        },
        6092: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSG: function() {
                    return w
                },
                default: function() {
                    return b
                }
            });
            var a = s(5893),
                l = s(9008),
                r = s.n(l);
            s(7294);
            var n = s(415),
                i = function() {
                    return (0, a.jsxs)(n.E.div, {
                        className: "flex flex-col lg:flex-row relative h-screen text-center lg:text-left max-w-7xl px-10 justify-center tall:justify-evenly pt-5 tall:mt-0 mx-auto items-center",
                        initial: {
                            opacity: 0
                        },
                        whileInView: {
                            opacity: 1
                        },
                        transition: {
                            duration: 2
                        },
                        children: [(0, a.jsx)("h3", {
                            className: "absolute top-24 uppercase tracking-[20px] text-gray-500",
                            children: "About"
                        }), (0, a.jsxs)(n.E.div, {
                            className: "relative w-24 md:w-48 lg:w-full h-24 md:h-48 lg:h-96 rounded-full lg:rounded-lg",
                            initial: {
                                x: -200,
                                opacity: 0
                            },
                            whileInView: {
                                x: 0,
                                opacity: 1
                            },
                            transition: {
                                duration: 1.5
                            },
                            children: [(0, a.jsx)("img", {
                                src: "/sit_adobe_express.jpeg",
                                alt: "",
                                className: "w-24 h-24 md:w-48 md:h-48 rounded-full lg:hidden"
                            }), (0, a.jsx)("img", {
                                src: "/sit.jpg",
                                alt: "",
                                className: "hidden lg:block lg:w-auto lg:h-auto lg:rounded-lg"
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "space-y-5 px-0 md:px-10",
                            children: [(0, a.jsx)("h4", {
                                className: "text-2xl md:text-4xl font-semibold",
                                children: "Some Intro"
                            }), (0, a.jsx)("p", {
                                className: "text-sm md:text-xl",
                                children: "Calvin is a versatile Full-Stack Engineer with 3 years of experience designing, building, and deploying scalable apps. He is proficient in JavaScript technologies such as React.js and Angular, and Java frameworks like Spring Boot. He has worked with MongoDB and MySQL databases and has a good understanding of REST and GraphQL APIs. Calvin has collaborated with Scrum teams and is a quick learner and resourceful professional who communicates well with both technical and non-technical audiences."
                            })]
                        })]
                    })
                },
                c = s(9121),
                o = function() {
                    return (0, a.jsxs)("header", {
                        className: "sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center",
                        children: [(0, a.jsxs)(n.E.div, {
                            className: "flex flex-row items-center",
                            initial: {
                                x: -500,
                                opacity: 0,
                                scale: .5
                            },
                            animate: {
                                x: 0,
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                duration: 1.5
                            },
                            children: [(0, a.jsx)(c.QZ, {
                                url: "https://www.linkedin.com/in/calvin-oyuyo-476700259//",
                                target: "_blank",
                                fgColor: "gray",
                                bgColor: "transparent"
                            }), (0, a.jsx)(c.QZ, {
                                url: "https://github.com/oyuyocalvin",
                                target: "_blank",
                                fgColor: "gray",
                                bgColor: "transparent"
                            })]
                        }), (0, a.jsxs)(n.E.div, {
                            className: "flex flex-row items-center text-gray-300 cursor-pointer",
                            initial: {
                                x: 500,
                                opacity: 0,
                                scale: .5
                            },
                            animate: {
                                x: 0,
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                duration: 1
                            },
                            children: [(0, a.jsx)(c.QZ, {
                                className: "cursor-pointer",
                                network: "email",
                                fgColor: "gray",
                                bgColor: "transparent"
                            }), (0, a.jsx)("p", {
                                className: "uppercase hidden md:inline-flex text-sm text-gray-400",
                                children: " Get in touch"
                            })]
                        })]
                    })
                },
                d = function(e) {
                    var t = e.singleExp;
                    return (0, a.jsx)("article", {
                        className: "flex flex-col rounded-lg items-center space-y-12 md:space-y-7 flex-shrink-0 overflow-y-scroll md:overflow-y-hidden w-[320px] md:w-[900px] snap-start bg-[#292929] p-4 md:p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200",
                        children: (0, a.jsxs)("div", {
                            className: "px-2 md:px-10",
                            children: [(0, a.jsx)("h4", {
                                className: "text-lg md:text-2xl lg:text-4xl font-light",
                                children: t.title
                            }), (0, a.jsx)("p", {
                                className: "font-bold text-lg md:text-2xl md:mt-1",
                                children: t.company
                            }), (0, a.jsx)("p", {
                                className: "uppercase py-3 md:py-5 text-gray-300",
                                children: "".concat(t.start, " ").concat(t.end ? "- ".concat(t.end) : "")
                            }), (0, a.jsx)("ul", {
                                className: "list-disc space-y-4 ml-5 text-sm md:text-lg",
                                children: t.duties.map(function(e, t) {
                                    return (0, a.jsx)("li", {
                                        children: e
                                    }, t)
                                })
                            })]
                        })
                    })
                },
                x = function(e) {
                    var t = e.experiences;
                    return (0, a.jsxs)(n.E.div, {
                        className: "flex flex-col relative h-screen overflow-hidden text-left max-w-full px-6 md:px-10 justify-evenly mx-auto items-center",
                        initial: {
                            opacity: 0
                        },
                        whileInView: {
                            opacity: 1
                        },
                        transition: {
                            duration: 2
                        },
                        children: [(0, a.jsx)("h3", {
                            className: "absolute top-24 uppercase tracking-[20px] text-gray-500",
                            children: "Experience"
                        }), (0, a.jsx)("div", {
                            className: "w-full flex space-x-3 p-10 snap-x snap-mandatory mt-28 md:mt-28 scrollbar-thin overflow-y-hidden overflow-x-scroll scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80",
                            children: t.map(function(e, t) {
                                return (0, a.jsx)(d, {
                                    singleExp: e
                                }, t)
                            })
                        })]
                    })
                },
                u = s(603),
                p = s(2637),
                m = function() {
                    return (0, a.jsxs)(n.E.div, {
                        className: "relative flex justify-center items-center",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            scale: [1, 2, 2, 3, 1],
                            opacity: [.1, .2, .4, .8, 1],
                            borderRadius: ["20%", "20%", "50%", "80%", "20%"]
                        },
                        transition: {
                            duration: 3
                        },
                        children: [(0, a.jsx)("div", {
                            className: "absolute border mt-52 border-[#333333] rounded-full h-[200px] w-[200px] animate-ping"
                        }), (0, a.jsx)("div", {
                            className: "absolute border mt-52 border-[#333333] rounded-full h-[300px] w-[300px]"
                        }), (0, a.jsx)("div", {
                            className: "absolute border mt-52 border-[#333333] rounded-full h-[500px] w-[500px]"
                        }), (0, a.jsx)("div", {
                            className: "absolute border mt-52 border-[#F7AB0A] rounded-full h-[650px] w-[650px] opacity-20 animate-pulse"
                        }), (0, a.jsx)("div", {
                            className: "absolute border mt-52 border-[#333333] rounded-full h-[800px] w-[800px]"
                        })]
                    })
                },
                h = s(1664),
                f = s.n(h),
                g = function() {
                    var e = (0, u.Z)((0, p.Ku)({
                        words: ["Hey \uD83E\uDD1D\uD83E\uDD1D, Hello World! Calvin here!", "I'm open for work,", "Will eventually be written in JavaScript", "<ReusableComponent/>"],
                        typeSpeed: 30,
                        deleteSpeed: 30,
                        loop: 0,
                        delaySpeed: 2500
                    }), 1)[0];
                    return (0, a.jsxs)("div", {
                        className: "h-screen flex flex-col space-y-8 justify-center text-center overflow-hidden",
                        children: [(0, a.jsx)(m, {}), (0, a.jsx)("div", {
                            className: "relative w-32 h-32 rounded-full mx-auto",
                            children: (0, a.jsx)("img", {
                                src: "/laugh.jpg",
                                alt: "",
                                className: "w-32 h-32 rounded-full"
                            })
                        }), (0, a.jsxs)("div", {
                            className: "z-20",
                            children: [(0, a.jsx)("h2", {
                                className: "text-sm uppercase text-gray-500 pb-2 tracking-[15px]",
                                children: "Software Engineer"
                            }), (0, a.jsxs)("h1", {
                                className: "text:lg md:text-3xl lg:text-5xl font-semibold px-10",
                                children: [(0, a.jsx)("span", {
                                    children: e
                                }), (0, a.jsx)(p.CF, {
                                    cursorColor: "#F7AB0A"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "pt-5",
                                children: [(0, a.jsx)(f(), {
                                    href: "#about",
                                    children: (0, a.jsx)("button", {
                                        className: "heroButton",
                                        children: "About"
                                    })
                                }), (0, a.jsx)(f(), {
                                    href: "#experience",
                                    children: (0, a.jsx)("button", {
                                        className: "heroButton",
                                        children: "Experience"
                                    })
                                }), (0, a.jsx)(f(), {
                                    href: "#skills",
                                    children: (0, a.jsx)("button", {
                                        className: "heroButton",
                                        children: "Skills"
                                    })
                                }), (0, a.jsx)(f(), {
                                    href: "#project",
                                    children: (0, a.jsx)("button", {
                                        className: "heroButton",
                                        children: "Projects"
                                    })
                                })]
                            })]
                        })]
                    })
                },
                j = function(e) {
                    var t = e.directionLeft,
                        s = e.level,
                        l = e.logo;
                    return (0, a.jsxs)(n.E.div, {
                        initial: {
                            x: t ? -100 : 100
                        },
                        transition: {
                            duration: 2
                        },
                        whileInView: {
                            x: 0
                        },
                        className: "group relative flex cursor-pointer overflow-hidden",
                        children: [(0, a.jsx)("div", {
                            className: "relative flex cursor-pointer w-12 md:w-24 h-12 md:h-24 rounded-full overflow-hidden object-center",
                            children: (0, a.jsx)("img", {
                                src: l,
                                alt: "",
                                className: "w-auto h-auto filter group-hover:grayscale transition duration-300 ease-in-out absolute z-10"
                            })
                        }), (0, a.jsx)("div", {
                            className: "opacity-0 flex cursor-pointer w-12 md:w-24 h-12 md:h-24 rounded-full overflow-hidden object-center group-hover:opacity-70 transition duration-1000 ease-in-out absolute z-20 bg-gray-200",
                            children: (0, a.jsx)("p", {
                                className: "relative text-lg md:text-2xl font-bold text-black top-3 left-1 md:top-8 md:left-5",
                                children: s
                            })
                        })]
                    })
                },
                y = function(e) {
                    var t = e.skills;
                    return (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsxs)(n.E.div, {
                            initial: {
                                opacity: 0
                            },
                            whileInView: {
                                opacity: 1
                            },
                            transition: {
                                duration: 2
                            },
                            className: "flex relative flex-col text-center md:text-left h-screen overflow-hidden max-w-full justify-center mx-auto items-center",
                            children: [(0, a.jsx)("h3", {
                                className: "absolute top-24 uppercase tracking-[20px] text-gray-500",
                                children: "Skills"
                            }), (0, a.jsx)("h3", {
                                className: "absolute top-36 uppercase tracking-[8px] text-gray-500 text-sm",
                                children: "Hover over skill for current proficiency"
                            }), (0, a.jsx)("div", {
                                className: "grid grid-cols-4 sm:grid-cols-4 gap-5",
                                children: t.map(function(e, t) {
                                    return (0, a.jsx)(j, {
                                        directionLeft: e.directionLeft,
                                        level: e.level,
                                        logo: e.logo,
                                        title: e.title
                                    }, t)
                                })
                            })]
                        })
                    })
                },
                w = !0,
                b = function(e) {
                    var t = e.experiences,
                        s = e.skills;
                    return (0, a.jsxs)("div", {
                        className: "bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80",
                        children: [(0, a.jsxs)(r(), {
                            children: [(0, a.jsx)("title", {
                                children: "Calvin"
                            }), (0, a.jsx)("link", {
                                rel: "icon",
                                href: "/favicon.ico"
                            })]
                        }), (0, a.jsx)(o, {}), (0, a.jsx)("section", {
                            id: "me",
                            className: "snap-start",
                            children: (0, a.jsx)(g, {})
                        }), (0, a.jsx)("section", {
                            id: "about",
                            className: "snap-start",
                            children: (0, a.jsx)(i, {})
                        }), (0, a.jsx)("section", {
                            id: "experience",
                            className: "snap-start",
                            children: (0, a.jsx)(x, {
                                experiences: t
                            })
                        }), (0, a.jsx)("section", {
                            id: "skills",
                            className: "snap-start",
                            children: (0, a.jsx)(y, {
                                skills: s
                            })
                        })]
                    })
                }
        }
    },
    function(e) {
        e.O(0, [236, 774, 888, 179], function() {
            return e(e.s = 8312)
        }), _N_E = e.O()
    }
]);