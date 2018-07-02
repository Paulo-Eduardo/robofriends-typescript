import * as React from 'react';
import Card from './Card';
import {IRobot} from '../containers/App'

interface IAppProps {
  robots: IRobot[];
}

interface IAppState {
}


class CardList extends React.Component<IAppProps, IAppState>{
  constructor(props : IAppProps) {
    super(props);
  }

  render() {
    const { robots } = this.props;
    return (
      <div>
        {
          robots.map((user, i) => {
            return (
              <Card key={i}
                    id={robots[i].id}
                    name={robots[i].name}
                    email={robots[i].email} />
            );
          })
        }
      </div>
    );
  }
}

export default CardList;