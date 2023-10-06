export const MyCard = ({
    icon = '',
    title = 'Lorem Ipsum',
    content = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum vel pariatur rem eius explicabo, quis praesentium voluptatibus eveniet? Temporibus eum minima vero laboriosam dolores molestias ducimus omnis animi natus commodi.',
}) => {
    return (
        <div className={`rounded p-8 bg-white shadow-xl shadow-gray-300 hover:shadow-2xl hover:scale-105 transition-all duration-200 delay-100`}>
            <div className="flex flex-col items-center">
                <div dangerouslySetInnerHTML={{__html: icon}} />
                <div className="mt-4 text-xl font-semibold text-center">
                    { title }
                </div>
                <div className="mt-4 text-base text-center">
                    { content }
                </div>
            </div>
        </div>
    )
}