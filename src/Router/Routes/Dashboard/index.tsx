import useGoals from 'hooks/useGoals';

interface Props {
    
}

const Dashboard = (props: Props) => {
    const { goals } = useGoals();
    return (
        <div>
            {goals && goals.map(({title, id}) => <p key={id}>{title}</p>)}
        </div>
    )
}

export default Dashboard
