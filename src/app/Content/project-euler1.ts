import { Content, IContentChunk, TextContentChunk, RawContentChunk, MathContentChunk } from '../Interfaces/IContent';

export class ProjectEuler1 extends Content{
  override LoadContent() {
    this.ContentChunks = [
      new TextContentChunk(`This problem can be brute forced without any real issue.  However, there is a way that this can be simplified, even to the point that we can solve it on pen and paper.  And even better, it's an excuse to tell an age-old math anecdote that is almost certainly not true.`),
      new TextContentChunk(`The story goes that a teacher, wanting to occupy their students for about 30 minutes, tasked them with adding all the numbers from 1 to 100, on pen and paper.  Just as the teacher was finished passing out the papers, one of the students handed in their answer.  After verifying that it was correct, the teacher asked how they could've possibly added all of those numbers so fast.  The explanation follows:`),
      new TextContentChunk(`The sum is indeed quite long, so let's give it a nickname.  Let ${this.GetForwardSum()}.  Now, rather inexplicably, we will note that we could just as easily write that ${this.GetBackwardSum()}.  The magic comes when we add these equations together, one summand at a time...`),
      new RawContentChunk(this.GetCombinedSum())
    ]
  }
  GetForwardSum() {
    return `<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mstyle displaystyle="true" scriptlevel="0">
    <mrow data-mjx-texclass="ORD">
      <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
        <mtr>
          <mtd>
            <mi>S</mi>
            <mo>=</mo>
            <mn>1</mn>
            <mo>+</mo>
            <mn>2</mn>
            <mo>+</mo>
            <mo>&#x22EF;</mo>
            <mo>+</mo>
            <mn>99</mn>
            <mo>+</mo>
            <mn>100</mn>
          </mtd>
        </mtr>
      </mtable>
    </mrow>
  </mstyle>
</math>`
  }
  GetBackwardSum() {
    return `<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
      <mstyle displaystyle="true" scriptlevel="0">
        <mrow data-mjx-texclass="ORD">
          <mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
            <mtr>
              <mtd>
                <mi>S</mi>
                <mo>=</mo>
                <mn>100</mn>
                <mo>+</mo>
                <mn>99</mn>
                <mo>+</mo>
                <mo>&#x22EF;</mo>
                <mo>+</mo>
                <mn>2</mn>
                <mo>+</mo>
                <mn>1</mn>
              </mtd>
            </mtr>
          </mtable>
        </mrow>
      </mstyle>
    </math>`
  }
  GetCombinedSum() {
    return `<math display="block" class="tml-display" style="display:block math;">
  <mrow>
    <mn>2</mn>
    <mi>S</mi>
    <mo>=</mo>
    <mo form="prefix" stretchy="false">(</mo>
    <mn>1</mn>
    <mo>+</mo>
    <mn>100</mn>
    <mo form="postfix" stretchy="false">)</mo>
    <mo>+</mo>
    <mo form="prefix" stretchy="false">(</mo>
    <mn>2</mn>
    <mo>+</mo>
    <mn>99</mn>
    <mo form="postfix" stretchy="false">)</mo>
    <mo>+</mo>
    <mo>⋯</mo>
    <mo>+</mo>
    <mo form="prefix" stretchy="false">(</mo>
    <mn>99</mn>
    <mo>+</mo>
    <mn>2</mn>
    <mo form="postfix" stretchy="false">)</mo>
    <mo>+</mo>
    <mo form="prefix" stretchy="false">(</mo>
    <mn>100</mn>
    <mo>+</mo>
    <mn>1</mn>
    <mo form="postfix" stretchy="false">)</mo>
    <mo>=</mo>
    <mn>101</mn>
    <mo>+</mo>
    <mn>101</mn>
    <mo>+</mo>
    <mo>⋯</mo>
    <mo>+</mo>
    <mn>101</mn>
    <mo>+</mo>
    <mn>101</mn>
  </mrow>
</math>`
  }
}
