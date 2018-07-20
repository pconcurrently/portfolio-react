import * as React from 'react';
import { Tooltip } from 'reactstrap';
import { Placement } from 'popper.js';

interface TooltipBadgeState {
    isOpen: boolean;
}

interface TooltipBadgeProps {
    icon: string;
    id: string;
    placement?: Placement,
    tooltip: string;
}

class TooltipBadge extends React.Component<TooltipBadgeProps, TooltipBadgeState> {
    constructor(props: any) {
        super(props);

        this.state = {
            isOpen: false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <i className={this.props.icon} id={this.props.id}></i>
                <Tooltip placement={this.props.placement || 'top'} isOpen={this.state.isOpen} target={this.props.id} toggle={this.toggle}>
                    {this.props.tooltip}
                </Tooltip>
            </div>
        );
    }
}

export default TooltipBadge;
