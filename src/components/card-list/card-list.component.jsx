import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {

    render() {
        const { monsters, filteredWord } = this.props;

        return (
            <div className="card-list">
                  <div className={`notify ${monsters.length === 0 ? "notify-show" : ""} `}>
                <h1>No Robot Found</h1>
                <p>The robot named "{filteredWord}" was not found.</p>
            </div>

                {/* Map ile listeleme yapıldı. */}
                {
                    monsters.map((monster) => {
                        return (
                        <Card monster={monster} key={monster.id} />
                        )
                    })
                }
            </div>
        )
    }
}

export default CardList;