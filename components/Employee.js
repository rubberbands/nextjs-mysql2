import Link from 'next/link'

export default (props) => {
    return (
        <div className="employeeComponent">
            <div style={{flex: '1 0 auto'}}>
                <Link href={{ pathname: '/employee', query: { id: props.id } }}>
                    {props.data.name}
                </Link>
            </div>
            <style jsx>{`
                .employeeComponent {
                    font-weight: bold;
                }
            `}</style>
        </div>
    )
}