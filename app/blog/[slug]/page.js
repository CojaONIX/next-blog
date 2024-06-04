
export default function BlogSlug({params}) {

    const blogs = [
        {
            title: 'Prvi Clanak',
            body: 'Donec laoreet mattis leo ut egestas. Phasellus facilisis ex lorem, et consequat leo dignissim et. Proin euismod metus sem, et convallis odio bibendum id. Aliquam finibus tortor dui. Phasellus vestibulum fringilla libero, id tempor eros sollicitudin nec. Proin quis lorem eu purus commodo tempus vel sit amet mi. Phasellus orci nisi, convallis non augue vel, interdum lobortis magna. Duis ut nulla magna. Cras sed lectus purus. Morbi tempor, nibh non malesuada faucibus, ligula diam sagittis est, vitae volutpat tortor ante non nunc. Nunc commodo neque neque, vitae dignissim massa iaculis ac. Ut tincidunt neque sed ipsum maximus luctus. Duis vitae magna sem.'
        },
        {
            title: 'Drugi Clanak',
            body: 'Maecenas malesuada mattis quam vestibulum fermentum. Nullam id posuere turpis. Vestibulum sit amet dui gravida, varius odio quis, auctor eros. Aliquam erat volutpat. Fusce finibus tincidunt convallis. Phasellus at blandit mauris, in dignissim orci. Vivamus sit amet consequat dolor. Donec porta est ut risus fermentum, id tempus ante bibendum. Nam ut sagittis sapien. Sed rhoncus diam id nibh aliquam, sit amet vehicula dui fringilla. Integer in est nisi. Nullam facilisis a sem eget blandit. Etiam ligula justo, pharetra eu auctor sed, mattis a mauris.'
        }
    ];

    const blogExists = blogs.find(blog => blog.title.toLowerCase().replace(' ', '-') === params.slug);

    return (
        <>
            <h1>Blog Page</h1>
            <h3>{params.slug}</h3>
            <hr/>
            {blogExists
                ? <>
                    <h2>{blogExists.title}</h2>
                    <p>{blogExists.body}</p>
                  </>
                : <h2>Blog not exists</h2>
            }
        </>
    )
}