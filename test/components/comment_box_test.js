import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('Comment Box', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(CommentBox);
    });

    it('has the comment-box class', () => {
        expect(component).to.have.class('comment-box');
    });

    it('has a text area', () => { 
        expect(component.find('textarea')).to.exist;
    });

    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });

    describe('entering some text', () => {
        //set up dummy text for textarea
        beforeEach(() => {
            component.find('textarea').simulate('change', 'new comment');
        });

        it('shows the text that is entered into textarea', () => {
            expect(component.find('textarea')).to.have.value('new comment');
        });

        it('when submitted, the input is cleared', () => {
            expect(component.find('textarea')).to.have.value('new comment');
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');

        });
    });
    
});