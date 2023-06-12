import React from 'react';

const themes=
{
    Dark:{
        background:"black",
        foreground:"white"
    },
    Light:{
        background:"black",
        foreground:"white"
    },
    Whatever:{
        background:"black",
        foreground:"white"
    }
}

const NewTheme=React.createContext(themes.Whatever);

function UseContext(props) {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <button style={{background:themes.background,color:themes.foreground}}>Click Me</button><br />
                    <p style={{background:themes.background,color:themes.foreground}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minima ducimus ipsum 
                    autem possimus incidunt sit voluptas doloribus fuga ut nobis blanditiis rerum labore eaque 
                    officia, aperiam atque porro impedit.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default UseContext;