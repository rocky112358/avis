import * as React from 'react';

import {
    connect,
    AppState,
} from '../../../../appState';
import Label from '../../../input/Label';
import TextInput from '../../../input/TextInput';
import Switch from '../../../input/Switch';
import Modal from '../../../Modal';
import * as style from './SaveAsGistModal.css';


interface SaveAsGistModalProps {
    appState: AppState;
}

interface SaveAsGistModalState {
    phase: 1 | 2;
}

class SaveAsGistModal extends React.Component<SaveAsGistModalProps, SaveAsGistModalState> {
    componentWillMount() {
        this.setState({ phase: 1 });
    }
    closeModal() {
        const { appState } = this.props;
        appState.setUIOpen('modal.saveAsGist', false);
    }
    renderPhase1() {
        return <Modal
            title="gist로 저장하기"
            prompt={[
                ['취소', null, () => this.closeModal()],
                ['확인', 'primary', () => {
                    // TODO
                    return new Promise(() => {});
                }],
            ]}
            closeModal={() => this.closeModal()}
            bodyClassName={style.modalBody}>
            <Label title="파일 이름">
                <TextInput value="" onChange={value => console.log(value)}/>
            </Label>
            <Label title="설명">
                <TextInput value="" onChange={value => console.log(value)}/>
            </Label>
            <Label title="공개 여부">
                <Switch
                    leftLabel="공개"
                    leftValue="public"
                    rightLabel="비공개"
                    rightValue="private"
                    value="public"
                    onChange={value => console.log(value)}
                />
            </Label>
        </Modal>;
    }
    renderPhase2() {
        return <Modal
            title="gist로 저장하기"
            prompt={[
                ['닫기', null, () => {}],
            ]}
            closeModal={() => this.closeModal()}>
        </Modal>;
    }
    render() {
        return this.renderPhase1();
    }
}

export default connect(
    appState => ({ appState }),
)(SaveAsGistModal);
