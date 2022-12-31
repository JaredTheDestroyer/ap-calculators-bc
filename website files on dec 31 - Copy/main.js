

function openPage(pageName) {
    var i;
    var x = document.getElementsByClassName("tabs__content");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "block";
}

var MQ = MathQuill.getInterface(2); // for backcompat

var halfLatex = document.getElementById('halfLatex');
halfLatex.innerHTML = "\\frac{1}{2}";
MQ.StaticMath(halfLatex);

var polarLatexIntegral = document.getElementById('polarLatexIntegral');
polarLatexIntegral.innerHTML = "\\myInt";
MQ.StaticMath(polarLatexIntegral);

var rsquareddtheta = document.getElementById('rsquareddtheta');
rsquareddtheta.innerHTML = "r^2 \\mathrm{d}\\theta";
MQ.StaticMath(rsquareddtheta);

var vectorDistanceIntegralLatex = document.getElementById('vectorDistanceIntegralLatex');
vectorDistanceIntegralLatex.innerHTML = "\\myInt";
MQ.StaticMath(vectorDistanceIntegralLatex);

var radicalsLatex1 = document.getElementById('radicalsLatex1');
radicalsLatex1.innerHTML = "[f'(t)]^2 + [g'(t)]^2";
MQ.StaticMath(radicalsLatex1);

var vectorDisplacementIntegralLatex0 = document.getElementById('vectorDisplacementIntegralLatex0');
vectorDisplacementIntegralLatex0.innerHTML = "&lang; \\myInt";
MQ.StaticMath(vectorDisplacementIntegralLatex0);

var ftdt = document.getElementById('ftdt');
ftdt.innerHTML = "f(t)dt,";
MQ.StaticMath(ftdt);

var gtdt = document.getElementById('gtdt');
gtdt.innerHTML = "g(t)dt &rang;";
MQ.StaticMath(gtdt);

var vectorDisplacementIntegralLatex1 = document.getElementById('vectorDisplacementIntegralLatex1');
vectorDisplacementIntegralLatex1.innerHTML = "\\myInt";
MQ.StaticMath(vectorDisplacementIntegralLatex1);

var polarThetaLatex = document.getElementById('polarThetaLatex');
polarThetaLatex.innerHTML = "\\theta";
MQ.StaticMath(polarThetaLatex);

var x = nerdamer.version();
console.log(x);

var cosineSquared = document.getElementById('cosineSquared');
cosineSquared.innerHTML = "\\cos(x)^2";
MQ.StaticMath(cosineSquared);

var cosineSquared0 = document.getElementById('cosineSquared0');
cosineSquared0.innerHTML = "\\cos(x)^2";
MQ.StaticMath(cosineSquared0);

var cosineSquared1 = document.getElementById('cosineSquared1');
cosineSquared1.innerHTML = "\\cos(x)^2";
MQ.StaticMath(cosineSquared1);

var cosineSquared2 = document.getElementById('cosineSquared2');
cosineSquared2.innerHTML = "\\cos(x)^2";
MQ.StaticMath(cosineSquared2);

var cosineSquared3 = document.getElementById('cosineSquared3');
cosineSquared3.innerHTML = "\\cos(x)^2";
MQ.StaticMath(cosineSquared3);

var cosineSquared4 = document.getElementById('cosineSquared4');
cosineSquared4.innerHTML = "\\cos(x)^2";
MQ.StaticMath(cosineSquared4);

var cosineSquared5 = document.getElementById('cosineSquared5');
cosineSquared5.innerHTML = "\\cos(x)^2";
MQ.StaticMath(cosineSquared5);

var cosineSquared6 = document.getElementById('cosineSquared6');
cosineSquared6.innerHTML = "\\cos(x)^2";
MQ.StaticMath(cosineSquared6);

var cosineSquared7 = document.getElementById('cosineSquared7');
cosineSquared7.innerHTML = "\\cos(x)^2";
MQ.StaticMath(cosineSquared7);

var limitLatexP = document.getElementById('limitLatex');
limitLatexP.innerHTML = " \\lim_{x\\to a} f(x) ";
MQ.StaticMath(limitLatexP);

var limitExample0 = document.getElementById('limitExample0');
limitExample0.innerHTML = "\\lim_{x\\to 1} \\frac{x^2-1}{x-1}";
MQ.StaticMath(limitExample0);

var limitAddLatex = document.getElementById('limitAddLatex');
limitAddLatex.innerHTML = "\\lim_{x\\to a }[f(x)+g(x)] =  \\lim_{x \\to a} f(x) +  \\lim_{x \\to a} g(x)";
MQ.StaticMath(limitAddLatex);

var limitSublatex = document.getElementById('limitSubLatex');
limitSubLatex.innerHTML = "\\lim_{x\\to a }[f(x)-g(x)] =  \\lim_{x \\to a} f(x) -  \\lim_{x \\to a} g(x)";
MQ.StaticMath(limitSubLatex);

var limitMulLatex = document.getElementById('limitMulLatex');
limitMulLatex.innerHTML = "\\lim_{x\\to a }[f(x) \\cdot g(x)] =  \\lim_{x \\to a} f(x) \\cdot  \\lim_{x \\to a} g(x)";
MQ.StaticMath(limitMulLatex);

var limitDivLatex = document.getElementById('limitDivLatex');
limitDivLatex.innerHTML = "\\lim_{x\\to a }[\\frac{f(x)}{g(x)}] =\\frac{  \\lim_{x \\to a} f(x)}{  \\lim_{x \\to a} g(x)}";
MQ.StaticMath(limitDivLatex);
var summationLatex = '\\sum_{n=a}^{b} f(n)';
var summationSignSpan = document.getElementById('summationSign');
summationSignSpan.innerHTML = summationLatex;
MQ.StaticMath(summationSign);

var summationExampleLatex = "\\sum_{n=1}^{5} n^2 ";
var sumex1 = document.getElementById('summationExample0');
sumex1.innerHTML = summationExampleLatex;
MQ.StaticMath(sumex1);

var sumexlatex = "= 1^2+2^2+3^3+4^2+5^2";
var sumex2 = document.getElementById('summationExample1');
sumex2.innerHTML = sumexlatex;
MQ.StaticMath(sumex2);

var sumex3 = document.getElementById('summationExample2');
sumex3.innerHTML = "= 1+4+9+16+25  ";
MQ.StaticMath(sumex3);

var sumex4 = document.getElementById('summationExample3');
sumex4.innerHTML = '=55';
MQ.StaticMath(sumex4);

// var fundamentalP = document.getElementById('fundamentalTheoremOfCalculus');
// fundamentalP.innerHTML = "\\int_a^b  f(x)  \\mathrm{d}x = F(b)-F(a)";
// MQ.StaticMath(fundamentalP);

var fundamentalTheoremLatexIntegral = document.getElementById('fundamentalTheoremLatexIntegral');
fundamentalTheoremLatexIntegral.innerHTML = "\\myInt";
MQ.StaticMath(fundamentalTheoremLatexIntegral);

var fundamentalLatex = document.getElementById('fundamentalLatex');
fundamentalLatex.innerHTML = 'f(x) \\mathrm{d}x = F(b) - F(a)';
MQ.StaticMath(fundamentalLatex);

var partsP = document.getElementById('byParts');
partsP.innerHTML = "\\myInt u \\mathrm{d}v = uv - \\myInt v \\mathrm{d}u";
MQ.StaticMath(partsP);

var partialFrac0 = document.getElementById('partialFrac0');
partialFrac0.innerHTML = "\\myInt \\frac{x+4}{x^2-x-2}dx";
MQ.StaticMath(partialFrac0);

var partialFrac1 = document.getElementById('partialFrac1');
partialFrac1.innerHTML = "=\\myInt\\frac{x+4}{(x-2)(x+1)} dx";
MQ.StaticMath(partialFrac1);

var partialFrac2 = document.getElementById('partialFrac2');
partialFrac2.innerHTML = "=\\myInt \\left( \\frac{2}{x-2}-\\frac{1}{x+1} \\right) dx";
MQ.StaticMath(partialFrac2);

var partialFrac3 = document.getElementById('partialFrac3');
partialFrac3.innerHTML = "=\\myInt \\left( \\frac{2}{x-2}\\right)dx - \\myInt \\left( \\frac{1}{x+1}\\right) dx";
MQ.StaticMath(partialFrac3);

var partialFrac4 = document.getElementById('partialFrac4');
partialFrac4.innerHTML = "=2ln(x-2)-ln(x+1)";
MQ.StaticMath(partialFrac4);

var intSubEx0 = document.getElementById('intSubEx0');
intSubEx0.innerHTML = '\\myInt 2xcos\\left(x^2\\right) \\mathrm{d}x';
MQ.StaticMath(intSubEx0);

var intSubEx1 = document.getElementById('intSubEx1');
intSubEx1.innerHTML = 'set u = ';

var xSquare = document.getElementById('xSquare');
MQ.StaticMath(xSquare);

var xndx = document.getElementById('xndx');
xndx.innerHTML = '\\myInt x^n dx = \\frac{1}{n+1}x^{n+1}';
MQ.StaticMath(xndx);

var OneoverX = document.getElementById('1overX');
OneoverX.innerHTML = "\\myInt \\frac{1}{x}dx = ln(x)"
MQ.StaticMath(OneoverX);

var dx = document.getElementById('dx');
dx.innerHTML = '\\myInt dx = x';
MQ.StaticMath(dx);

var exInt = document.getElementById('exInt');
exInt.innerHTML = '\\myInt e^x dx = e^x';
MQ.StaticMath(exInt);

var intSin = "\\myInt sin(x) = -cos(x)";
var intCos = "\\myInt cos(x) = sin(x)";
var intSec2 = "\\myInt sec^2(x) = tan(x)";
var intcsccot = "\\myInt -csc(x)cot(x) = csc(x)";
var intsectan = "\\myInt sec(x)tan(x) = sec(x)";
var intnegcsc2 = "\\myInt -csc^2(x) = cot(x)";

//YOU STOPPED HERE. GO DECLARE VARIABLES FOR HTML ELEMENTS AND FILL AND STATICMATH

var is = document.getElementById('intSin');
var ic = document.getElementById('intCos');
var ise = document.getElementById('intSec2');
var ics = document.getElementById('intcsccot');
var isec = document.getElementById('intsectan');
var inc = document.getElementById('intnegcsc2');

is.innerHTML = intSin;
ic.innerHTML = intCos;
ise.innerHTML = intSec2;
ics.innerHTML = intcsccot;
isec.innerHTML = intsectan;
inc.innerHTML = intnegcsc2;

MQ.StaticMath(is);
MQ.StaticMath(ic);
MQ.StaticMath(ise);
MQ.StaticMath(ics);
MQ.StaticMath(isec);
MQ.StaticMath(inc);
var sinDeriv = "\\frac{d}{dx}\\sin\\left(x\\right)=\\cos\\left(x\\right)";
var cosDeriv = "\\frac{d}{dx}\\cos\\left(x\\right)=-\\sin\\left(x\\right)";
var tanDeriv = "\\frac{d}{dx}\\tan\\left(x\\right)=\\sec^2\\left(x\\right)";
var cscDeriv = '\\frac{d}{dx}\\csc\\left(x\\right)=-\\csc\\left(x\\right)\\cot\\left(x\\right)';
var secDeriv = '\\frac{d}{dx}\\sec\\left(x\\right)=\\sec\\left(x\\right)\\tan\\left(x\\right)';
var cotDeriv = '\\frac{d}{dx}\\cot\\left(x\\right)=-\\csc^2\\left(x\\right)';
var exDeriv = '\\frac{d}{dx}e^x=e^x';
var lnxDeriv = '\\frac{d}{dx}ln(x)=\\frac{1}{x}';

var sin = document.getElementById('sin');
var cos = document.getElementById('cos');
var tan = document.getElementById('tan');
var csc = document.getElementById('csc');
var sec = document.getElementById('sec');
var cot = document.getElementById('cot');
var ex = document.getElementById('ex');
var lnx = document.getElementById('lnx');


sin.innerHTML = sinDeriv;
cos.innerHTML = cosDeriv;
tan.innerHTML = tanDeriv;
csc.innerHTML = cscDeriv;
sec.innerHTML = secDeriv;
cot.innerHTML = cotDeriv;
ex.innerHTML = exDeriv;
lnx.innerHTML = lnxDeriv;

MQ.StaticMath(sin);
MQ.StaticMath(cos);
MQ.StaticMath(tan);
MQ.StaticMath(csc);
MQ.StaticMath(sec);
MQ.StaticMath(cot);
MQ.StaticMath(ex);
MQ.StaticMath(lnx);



var powerRuleExample = document.getElementById('powerRule');
powerRuleExample.innerHTML = "\\frac{d}{dx}x^n=nx^{n-1}";
MQ.StaticMath(powerRuleExample);

var productRuleExample = document.getElementById('productRule');
productRuleExample.innerHTML = "\\frac{d}{dx}f(x)g(x)=f'(x)g(x)+f(x)g'(x)";
MQ.StaticMath(productRuleExample);

var quotientRuleExample = document.getElementById('quotientRule');
quotientRuleExample.innerHTML = "\\frac{d}{dx}\\frac{f(x)}{g(x)}=\\frac{f'(x)g(x)-f(x)g'(x)}{g(x)^2}";
MQ.StaticMath(quotientRuleExample);

var chainRuleExample = document.getElementById('chainRule');
chainRuleExample.innerHTML = "\\frac{d}{dx}f(g(x))=f'(g(x)) \\cdot g'(x)";
MQ.StaticMath(chainRuleExample);


var mathFieldSpan = document.getElementById('userInput');
function derivative() {
    var problemSpan = document.getElementById("derivative");

    var input = mathField.latex();

    try {
        input = parseFunction(input);
    } catch (error) {
        problemSpan.innerHTML = "Invalid input!";
        return -1;
    }

    console.log(input.text());

    try {
        var deriv = nerdamer.diff(input, 'x');
    }
    catch (err) {
        problemSpan.innerHTML = "Computing error!";
        return -1;
    }
    console.log(deriv.text());
    deriv = parseAnswer(deriv);
    console.log(deriv);


    //deriv = logToLn(deriv);
    //console.log(deriv);

    problemSpan.innerHTML = deriv;

    MQ.StaticMath(problemSpan);
}
var mathField = MQ.MathField(mathFieldSpan, {
    spaceBehavesLikeTab: true,
    autoCommands: 'pi theta',
    handlers: {
        enter: function () { derivative(); }
    }
});



var derivPointSpan = document.getElementById("inputDerivativePoint");
var inputDerivPoint = document.getElementById("inputDerivPoint");
var mathField1 = MQ.MathField(derivPointSpan, {
    spaceBehavesLikeTab: true, autoCommands: 'pi theta',
    handlers: {
        enter: function () { derivativePoint(); }
    }
});
var mathField2 = MQ.MathField(inputDerivPoint, {
    spaceBehavesLikeTab: true, autoCommands: 'pi theta',
    handlers: {
        enter: function () { derivativePoint(); }
    }
});

function derivativePoint() {
    var answerDerivPt = document.getElementById("answerDerivPt");
    var answerDerivPtNum = document.getElementById("answerDerivPtNum");

    var func = mathField1.latex();


    try {
        func = parseFunction(func);
    } catch (error) {
        answerDerivPt.innerHTML = "Invalid input on f(x)!";
        answerDerivPtNum.innerHTML = "Invalid input on f(x)!";
        return -1;
    }

    try {
        var funcDeriv = nerdamer.diff(func, 'x');
    }
    catch (err) {
        answerDerivPt.innerHTML = "Computing error!";
        answerDerivPtNum.innerHTML = "Computing error!";
        return -1;
    }


    var pt = mathField2.latex();

    try {
        pt = parseNumber(pt);
    }
    catch (err) {
        answerDerivPt.innerHTML = "Invalid input on x=";
        answerDerivPtNum.innerHTML = "Invalid input on x=";
        return -1;
    }

    try {
        var ans = nerdamer(funcDeriv, { x: pt });
    }
    catch (err) {
        answerDerivPt.innerHTML = "Computing error!";
        answerDerivPtNum.innerHTML = "Computing error!";
        return -1;
    }

    console.log(ans.text());

    var ansDec = nerdamer(ans.evaluate());
    //   ansDec = parseAnswer(ansDec);

    ans = parseAnswer(ans);
    console.log(ans);


    answerDerivPt.innerHTML = ans;

    // console.log(ansDec.text());


    answerDerivPtNum.innerHTML = ansDec.text();
    MQ.StaticMath(answerDerivPt);
    MQ.StaticMath(answerDerivPtNum);
}

var inputIntegral = document.getElementById("inputIntegral");
var integralMathField = MQ.MathField(inputIntegral, {
    spaceBehavesLikeTab: true,
    autoCommands: 'pi theta',
    handlers: {
        enter: function () { integrate(); }
    }
})
function integrate() {
    var answerIntegral = document.getElementById("answerIntegral");
    var func = integralMathField.latex();

    try {
        func = parseFunction(func);
    }
    catch (err) {
        answerIntegral.innerHTML = "Invalid input!";
        return -1;
    }


    try {
        var funcIntegral = nerdamer.integrate(func);
    }
    catch (err) {
        answerIntegral.innerHTML = "Invalid input!";
        return -1;
    }

    var x = funcIntegral.text();
    funcIntegral = parseAnswer(funcIntegral);
    console.log(funcIntegral);


    answerIntegral.innerHTML = funcIntegral;
    MQ.StaticMath(answerIntegral);
    if (x.length > 6) {
        var firstSix = x.slice(0, 6);
        if (firstSix == "integr") {
            answerIntegral.innerHTML = "No integral found!";
        }
    }



}

var inputDefIntegral = document.getElementById("inputDefIntegral");
var inputDefIntegralFrom = document.getElementById("inputDefIntegralFrom");
var inputDefIntegralTo = document.getElementById("inputDefIntegralTo");
var integralDefMathField = MQ.MathField(inputDefIntegral, {
    spaceBehavesLikeTab: true, autoCommands: 'pi theta',
    handlers: {
        enter: function () { defIntegrate(); }
    }
})
var integralDefFromMathField = MQ.MathField(inputDefIntegralFrom, {
    spaceBehavesLikeTab: true, autoCommands: 'pi theta',
    handlers: {
        enter: function () { defIntegrate(); }
    }
})
var integralDefToMathField = MQ.MathField(inputDefIntegralTo, {
    spaceBehavesLikeTab: true, autoCommands: 'pi theta',
    handlers: {
        enter: function () { defIntegrate(); }
    }
})

function defIntegrate() {
    var answerDefIntegral = document.getElementById("answerDefIntegral");
    var answerDefIntegralDec = document.getElementById("answerDefIntegralDec");
    var func = integralDefMathField.latex();

    try {
        func = parseFunction(func);
    }
    catch (err) {
        answerDefIntegral.innerHTML = "Invalid function!";
        answerDefIntegralDec.innerHTML = "Invalid function!";
        return -1;
    }


    var from = integralDefFromMathField.latex();

    try {
        from = nerdamer.convertFromLaTeX(from);
        from = nerdamer(from);
        from = from.text();
        from = piToMathPi(from);
        from = from.replaceAll('e','Math.E')
        from = eval(from);
    }
    catch (err) {
        answerDefIntegral.innerHTML = "Invalid lower bound!";
        answerDefIntegralDec.innerHTML = "Invalid lower bound!";
        return -1;
    }
    var to = integralDefToMathField.latex();
    try {

        to = nerdamer.convertFromLaTeX(to);
        to = nerdamer(to);
        to = to.text();
        to = piToMathPi(to);
        to = to.replaceAll('e','Math.E')
        to = eval(to);
    }
    catch (err) {
        answerDefIntegral.innerHTML = "Invalid upper bound!";
        answerDefIntegralDec.innerHTML = "Invalid upper bound!";
        return -1;
    }



    try {
        var ans = nerdamer.defint(func, from, to, 'x');
    }
    catch (err) {
        answerDefIntegral.innerHTML = "Computing error!";
        answerDefIntegralDec.innerHTML = "Computing error!";
        return -1;
    }

    var ansLatex = nerdamer.convertToLaTeX(ans.text());

    answerDefIntegral.innerHTML = ansLatex;
    MQ.StaticMath(answerDefIntegral);


    answerDefIntegralDec.innerHTML = ans.text();
}

var inputFunc = document.getElementById("inputFunc");
var inputLower = document.getElementById("inputLower");
var inputUpper = document.getElementById("inputUpper");
var funcMathField = MQ.MathField(inputFunc, {
    spaceBehavesLikeTab: true, autoCommands: 'pi theta',
    handlers: {
        enter: function () { summation(); }
    }
})
var funcMathFieldLower = MQ.MathField(inputLower, {
    spaceBehavesLikeTab: true, autoCommands: 'pi theta',
    handlers: {
        enter: function () { summation(); }
    }
})
var funcMathFieldUpper = MQ.MathField(inputUpper, {
    spaceBehavesLikeTab: true, autoCommands: 'pi theta',
    handlers: {
        enter: function () { summation(); }
    }
})

function summation() {
    var answerSummationFrac = document.getElementById("answerSummationFrac");
    var answerSummationDec = document.getElementById("answerSummationDec");

    var func = funcMathField.latex();

    try {
        func = parseFunction(func);
    } catch (error) {
        answerSummationFrac.innerHTML = "Invalid function! Make sure to use 'n' as your variable!";
        answerSummationDec.innerHTML = "Invalid function! Make sure to use 'n' as your variable!";
        return -1;
    }


    var from = funcMathFieldLower.latex();

    try {
        from = parseNumber(from);
    } catch (error) {
        answerSummationFrac.innerHTML = "Invalid start!";
        answerSummationDec.innerHTML = "Invalid start!";
        return -1;
    }


    var to = funcMathFieldUpper.latex();

    try {
        to = parseNumber(to);
    } catch (error) {
        answerSummationFrac.innerHTML = "Invalid end!";
        answerSummationDec.innerHTML = "Invalid end!";
        return -1;
    }

    try {
        var ans = nerdamer.sum(func, 'n', from, to);
    } catch (error) {
        answerSummationFrac.innerHTML = "Error!";
        answerSummationDec.innerHTML = "Error!";
        return -1;
    }

    var ansLatex = nerdamer.convertToLaTeX(ans.text());


    answerSummationFrac.innerHTML = ansLatex;
    MQ.StaticMath(answerSummationFrac);


    answerSummationDec.innerHTML = ans.text();

}

var inputLimitAtFunction = document.getElementById("limitAtFunction");
var inputLimitAtFunctionPoint = document.getElementById("limitAtFunctionPoint");
var inputLimitAtFunc = MQ.MathField(inputLimitAtFunction, {
    spaceBehavesLikeTab: true, autoCommands: 'pi theta',
    handlers: {
        enter: function () { limitAt(); }
    }
})
var inputLimitAtFuncPt = MQ.MathField(inputLimitAtFunctionPoint, {
    spaceBehavesLikeTab: true, autoCommands: 'pi theta',
    handlers: {
        enter: function () { limitAt(); }
    }
})
function limitAt() {
    answerLimit = document.getElementById("answerLimit");

    var func = inputLimitAtFunc.latex();

    try {
        func = parseFunction(func);
    } catch (error) {
        answerLimit.innerHTML = "Invalid function!";
        return -1;
    }


    var at = inputLimitAtFuncPt.latex();

    try {
        at = parseNumber(at);
    } catch (error) {
        answerLimit.innerHTML = "Invalid point!";
        return -1;
    }


    try {
        var ans = nerdamer.limit(func, 'x', at);
    } catch (error) {
        answerLimit.innerHTML = "Error!";
        return -1;
    }

    // ans = parseAnswer(ans);
    ans = ans.text('decimals');

    answerLimit.innerHTML = ans;

    MQ.StaticMath(answerLimit);
}





var parametricSpanx = document.getElementById('parametricInputx');

var parametricFieldx = MQ.MathField(parametricSpanx, {
    spaceBehavesLikeTab: true,
    autoCommands: 'pi theta',
    handlers: {
        enter: function () { parametricSecondDerivative(); }
    }
})

var parametricSpany = document.getElementById('parametricInputy');

var parametricFieldy = MQ.MathField(parametricSpany, {
    spaceBehavesLikeTab: true,
    autoCommands: 'pi theta',
    handlers: {
        enter: function () { parametricSecondDerivative(); }
    }
})



var parametricSpanPtt = document.getElementById('parametricInputPtt');

var parametricFieldPtt = MQ.MathField(parametricSpanPtt, {
    spaceBehavesLikeTab: true,
    autoCommands: 'pi theta',
    handlers: {
        enter: function () { parametricSecondDerivativePt(); }
    }
})

var FirstDerivative = document.getElementById("derivpt1");
var FirstDerivativeAnswer = document.getElementById("derivpt1ans");
var FirstDerivativeAnswerDec = document.getElementById("derivpt1dec");
var ParametricFirstAnswerOutput = document.getElementById("parametricAnswerPt");
var ParametricFirstAnswerOutputDec = document.getElementById("parametricAnswerPtDec");


var SecondDerivative = document.getElementById("derivpt2");
var SecondDerivativeAnswer = document.getElementById("derivpt2ans");
var SecondDerivativeAnswerDec = document.getElementById("derivpt2dec");
var ParametricSecondAnswerOutput = document.getElementById("parametricAnswerPt1");
var ParametricSecondAnswerOutputDec = document.getElementById("parametricAnswerPt1Dec");

var eulerFunctionSpan = document.getElementById('eulerDerivativeInput');
var eulerStepSizeSpan = document.getElementById('eulerStepSizeInput');
var eulerBeginningSpan = document.getElementById('eulerBeginningInput');
var eulerBeginningSpany = document.getElementById('eulerBeginningInputy');
var eulerEndSpan = document.getElementById('eulerEndInput');

var eulerFunctionField = MQ.MathField(eulerFunctionSpan, {
    spaceBehavesLikeTab: true,
    autoCommands: 'pi theta',
    handlers: {
        enter: function () { euler(); }
    }
})

var eulerStepSizeField = MQ.MathField(eulerStepSizeSpan, {
    spaceBehavesLikeTab: true,
    autoCommands: 'pi theta',
    handlers: {
        enter: function () { euler(); }
    }
})

var eulerBeginningField = MQ.MathField(eulerBeginningSpan, {
    spaceBehavesLikeTab: true,
    autoCommands: 'pi theta',
    handlers: {
        enter: function () { euler(); }
    }
})

var eulerEndField = MQ.MathField(eulerEndSpan, {
    spaceBehavesLikeTab: true,
    autoCommands: 'pi theta',
    handlers: {
        enter: function () { euler(); }
    }
})

var eulerBeginningYField = MQ.MathField(eulerBeginningSpany, {
    spaceBehavesLikeTab: true,
    autoCommands: 'pi theta',
    handlers: {
        enter: function () { euler(); }
    }
})

var cfiSpan = document.getElementById('curveFunctionInput');
var csiSpan = document.getElementById('curveStartInput');
var ceiSpan = document.getElementById('curveEndInput');

var cfiField = MQ.MathField(cfiSpan, {
    spaceBehavesLikeTab: true,
    autoCommands: 'pi theta',
    handlers: {
        enter: function () { curve(); }
    }
})
var csiField = MQ.MathField(csiSpan, {
    spaceBehavesLikeTab: true,
    autoCommands: 'pi theta',
    handlers: {
        enter: function () { curve(); }
    }
})
var ceiSpan = MQ.MathField(ceiSpan, {
    spaceBehavesLikeTab: true,
    autoCommands: 'pi theta',
    handlers: {
        enter: function () { curve(); }
    }
})

var vectorXSpan = document.getElementById('vectorXInput');
var vectorYSpan = document.getElementById('vectorYInput');
var vectorXField = MQ.MathField(vectorXSpan, {
    spaceBehavesLikeTab: true,
    autoCommands: 'pi theta',
    handlers: {
        enter: function () { vectorSecondDerivative(); }
    }
})
var vectorYField = MQ.MathField(vectorYSpan, {
    spaceBehavesLikeTab: true,
    autoCommands: 'pi theta',
    handlers: {
        enter: function () { vectorSecondDerivative(); }
    }
})

var vectorFirstDerivativeText = document.getElementById("vectorFirstDerivativeAnswer0");
var vectorFirstDerivativeAnswer = document.getElementById('vectorFirstDerivativeAnswer');

var vectorSecondDerivativeAnswerText = document.getElementById("vectorSecondDerivativeAnswerText");
var vectorSecondDerivativeAnswer = document.getElementById('vectorSecondDerivativeAnswer');

var vectorCurveStartInputSpan = document.getElementById('vectorCurveStartInput');
var vectorCurveEndInputSpan = document.getElementById('vectorCurveEndInput');

var vectorStartField = MQ.MathField(vectorCurveStartInputSpan, {
    spaceBehavesLikeTab: true,
    autoCommands: 'pi theta',

})
var vectorEndField = MQ.MathField(vectorCurveEndInputSpan, {
    spaceBehavesLikeTab: true,
    autoCommands: 'pi theta',
})

var polarInputSpan = document.getElementById('polarFunctionInput');
var polarInputField = MQ.MathField(polarInputSpan, {
    spaceBehavesLikeTab: true,
    autoCommands: 'pi theta',
    handlers: {
        enter: function () { polarDerive(); }
    }
})

var polarLowerBoundSpan = document.getElementById('polarLowerBound');
var polarUpperBoundSpan = document.getElementById('polarUpperBound');

var polarLowerBoundField = MQ.MathField(polarLowerBoundSpan, {
    spaceBehavesLikeTab: true,
    autoCommands: 'pi theta',
    handlers: {
        enter: function () { polarIntegrate(); }
    }
})

var polarUpperBoundField = MQ.MathField(polarUpperBoundSpan, {
    spaceBehavesLikeTab: true,
    autoCommands: 'pi theta',
    handlers: {
        enter: function () { polarIntegrate(); }
    }
})

var thetaLatex = "\\theta=";
var theta1 = document.getElementById('thetaEquals');
var theta2 = document.getElementById('thetaEquals1');
theta1.innerHTML = thetaLatex;
theta2.innerHTML = thetaLatex;
MQ.StaticMath(theta1);
MQ.StaticMath(theta2);



var clli = document.getElementById('curveLengthLatexIntegral');
clli.innerHTML = "\\myInt";
MQ.StaticMath(clli);

var radicalsLatex = document.getElementById('radicalsLatex');
radicalsLatex.innerHTML = "1+(\\frac{dy}{dx})^2";
MQ.StaticMath(radicalsLatex);

var para1DerivLatex = document.getElementById('parametricDeriv1Latex');
para1DerivLatex.innerHTML = "\\frac{dy}{dx} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}}";
MQ.StaticMath(para1DerivLatex);

var parametricDeriv2Latex = document.getElementById('parametricDeriv2Latex');
parametricDeriv2Latex.innerHTML = "\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}}";
MQ.StaticMath(parametricDeriv2Latex);

var eulerFormulaLatex = document.getElementById('eulerFormulaLatex');
eulerFormulaLatex.innerHTML = "Y_{n} = Y_{n-1} + hF(x_{n-1},y_{n-1})";
MQ.StaticMath(eulerFormulaLatex);

var yn = document.getElementById('yn');
yn.innerHTML = 'Y_{n}';
MQ.StaticMath(yn);

var ynminus1 = document.getElementById('ynminus1');
ynminus1.innerHTML = 'Y_{n-1}';
MQ.StaticMath(ynminus1);

var hlatex = document.getElementById('hlatex');
MQ.StaticMath(hlatex);

var previousSlope = document.getElementById('previousSlope');
previousSlope.innerHTML = 'F(x_{n-1},y_{n-1})';
MQ.StaticMath(previousSlope);

var vectorDeriv1 = document.getElementById('vectorDeriv1');
vectorDeriv1.innerHTML = " &lang;\\mathrm{f'(t), g'(t)} &rang; ";
MQ.StaticMath(vectorDeriv1);

var vectorDeriv2 = document.getElementById('vectorDeriv2');
vectorDeriv2.innerHTML = " &lang; \\mathrm{f''(t), g''(t)} &rang;";
MQ.StaticMath(vectorDeriv2);



var eulerFunctionExample = document.getElementById('eulerFunctionExample');
eulerFunctionExample.innerHTML = "f(x) = x^2";
MQ.StaticMath(eulerFunctionExample);

var eulerFunctionExample1 = document.getElementById('eulerFunctionExample1');
eulerFunctionExample1.innerHTML = "f(x) = x^2";
MQ.StaticMath(eulerFunctionExample1);

var eulerFunctionDeriv = document.getElementById('eulerFunctionDeriv');
eulerFunctionDeriv.innerHTML = "f'(x) = 2x";
MQ.StaticMath(eulerFunctionDeriv);

var theta15 = document.getElementById('theta15')
theta15.innerHTML = "\\theta";
MQ.StaticMath(theta15);

var rcostheta = document.getElementById('rcostheta');
rcostheta.innerHTML = "x=rcos\\theta";
MQ.StaticMath(rcostheta);

var rsintheta = document.getElementById('rsintheta');
rsintheta.innerHTML = "y=rsin\\theta";
MQ.StaticMath(rsintheta);

var polarDerivLatex = document.getElementById('polarDerivLatex');
polarDerivLatex.innerHTML = "\\frac{dy}{dx} = \\frac{\\frac{dy}{d\\theta}}{\\frac{dx}{d\\theta}}=\\frac{r'sin\\theta+rcos\\theta}{r'cos\\theta-rsin\\theta}";
MQ.StaticMath(polarDerivLatex);

function parametricFirstDerivative() {
    var paraAns = document.getElementById("parametricAnswer");

    try {
        var inputx = parametricFieldx.latex();
        inputx = parseFunction(inputx);
    } catch (error) {
        paraAns.innerHTML = "Invalid x input!";
        return -1;
    }



    try {
        var inputy = parametricFieldy.latex();
        inputy = parseFunction(inputy);
    } catch (err) {
        paraAns.innerHTML = "Invalid x input!";
        return -1;
    }


    try {
        var derivx = nerdamer.diff(inputx, 't');
        var derivy = nerdamer.diff(inputy, 't');
        var ans = nerdamer.divide(derivy, derivx);
        ans = nerdamer.simplify(ans);
    } catch (error) {
        paraAns.innerHTML = "Error!";
        return -1;
    }

    ans = parseAnswer(ans);

    paraAns.innerHTML = ans;

    var deriv1 = document.getElementById("deriv1");
    deriv1.style.display = "block";

    MQ.StaticMath(paraAns);

    hideParametricSecondDerivates();
}

function parametricSecondDerivative() {
    var paraAns = document.getElementById("parametricAnswer");
    var deriv21 = document.getElementById("parametricAnswer2");
    var paraAns1 = document.getElementById("parametricAnswer2");
    var deriv1 = document.getElementById("deriv1");
    var deriv20 = document.getElementById("deriv2");

    var inputx = parametricFieldx.latex();

    try {
        inputx = parseFunction(inputx);

    } catch (error) {
        paraAns.innerHTML = "Invalid x input!";
        return -1;
    }

    var inputy = parametricFieldy.latex();

    try {
        inputy = parseFunction(inputy);
    } catch (error) {
        paraAns.innerHTML = "Invalid y input!";
        return -1;
    }



    try {
        var derivx = nerdamer.diff(inputx, 't');
        var derivy = nerdamer.diff(inputy, 't');
        var ans = nerdamer.divide(derivy, derivx);
    } catch (error) {
        paraAns.innerHTML = "Error!";
        return -1;
    }

    var ans1 = ans; //save it for 2nd deriv

    ans = nerdamer.simplify(ans);
    ans = parseAnswer(ans);

    paraAns.innerHTML = ans;
    MQ.StaticMath(paraAns);


    try {
        var dydxDeriv = nerdamer.diff(ans1, 't');
        derivx = nerdamer.divide(1, derivx);
        var deriv2 = nerdamer(dydxDeriv).multiply(derivx);
    } catch (error) {
        paraAns.innerHTML = "Error!";
        return -1;
    }
    deriv2 = parseAnswer(deriv2);


    deriv21.style.display = "block";
    paraAns1.innerHTML = deriv2;


    deriv1.style.display = "block";


    deriv20.style.display = "block";

    MQ.StaticMath(paraAns1);
}

function parametricFirstDerivativePt() {
    var deriv1 = document.getElementById("parametricAnswerPt");
    var deriv2 = document.getElementById("parametricAnswerPtDec");

    var inputx = parametricFieldx.latex();
    try {
        inputx = parseFunction(inputx);
    } catch (error) {
        deriv1.innerHTML = "Invalid x input!";
        return -1;
    }

    var inputy = parametricFieldy.latex();

    try {
        inputy = parseFunction(inputy);

    } catch (error) {
        deriv1.innerHTML = "Invalid y input!";
        return -1;
    }

    try {
        var derivx = nerdamer.diff(inputx, 't');
        var derivy = nerdamer.diff(inputy, 't');
        var derivation = nerdamer.divide(derivy, derivx);
    } catch (error) {
        deriv1.innerHTML = "Error computing!";
        return -1;
    }

    var inputt = parametricFieldPtt.latex();

    try {
        inputt = parseNumber(inputt);
    } catch (error) {
        deriv1.innerHTML = "Invalid t input!";
        return -1;
    }

    try {
        var ans = nerdamer(derivation, { t: inputt });
    } catch (error) {
        deriv1.innerHTML = "Error computing!";
        return -1;
    }

    var ansDec = nerdamer(ans.evaluate());

    ans = parseAnswer(ans);


    showAllParametricDeterminateFirstDerivatives();

    deriv1.innerHTML = ans;
    MQ.StaticMath(deriv1);

    deriv2.innerHTML = ansDec.text();
    MQ.StaticMath(deriv2);

    hideAllParametricDeterminateSecondDerivatives();
}

function parametricSecondDerivativePt() {
    var inputx = parametricFieldx.latex();

    try {
        inputx = parseFunction(inputx);
    } catch (error) {
        ParametricFirstAnswerOutput.innerHTML = "Invalid x input!";
        return -1;
    }



    var inputy = parametricFieldy.latex();

    try {
        inputy = parseFunction(inputy);
    } catch (error) {
        ParametricFirstAnswerOutput.innerHTML = "Invalid y input!";
        return -1;
    }

    var derivx = nerdamer.diff(inputx, 't');
    var derivy = nerdamer.diff(inputy, 't');

    var inputt = parametricFieldPtt.latex();
    try {
        inputt = parseNumber(inputt);
    } catch (error) {
        ParametricFirstAnswerOutput.innerHTML = "Invalid t input!";
        return -1;
    }

    var derivation = nerdamer.divide(derivy, derivx);
    var firstDerivAns = nerdamer(derivation, { t: inputt });
    var firstDerivAnsDec = nerdamer(firstDerivAns.evaluate());

    firstDerivAns = nerdamer.convertToLaTeX(firstDerivAns.text());
    firstDerivAns = logToLn(firstDerivAns);

    var derivxReciprocal = nerdamer.divide(1, derivx);
    var derivationOfDerivation = nerdamer.diff(derivation, 't');
    var deriv2 = nerdamer(derivationOfDerivation).multiply(derivxReciprocal);

    var ans = nerdamer(deriv2, { t: inputt });
    var ansDec = nerdamer(ans.evaluate());
    ans = parseAnswer(ans);

    showAllParametricDeterminate();

    ParametricFirstAnswerOutput.innerHTML = firstDerivAns;
    ParametricFirstAnswerOutputDec.innerHTML = firstDerivAnsDec.text();
    MQ.StaticMath(ParametricFirstAnswerOutput);
    MQ.StaticMath(ParametricFirstAnswerOutputDec);

    ParametricSecondAnswerOutput.innerHTML = ans;
    ParametricSecondAnswerOutputDec.innerHTML = ansDec.text();
    MQ.StaticMath(ParametricSecondAnswerOutput);
    MQ.StaticMath(ParametricSecondAnswerOutputDec);

}

function euler() {
    var ansDecOutput = document.getElementById("eulerAnswerDec");
    var ansOutput = document.getElementById("eulerAnswer");
    var tableOutput = document.getElementById("eulerTableAnswer");

    var functionInput = eulerFunctionField.latex();
    try {
        functionInput = parseFunction(functionInput);
    } catch (error) {
        ansDecOutput.innerHTML = "Invalid function!";
        return -1;
    }

    var stepSizeInput = eulerStepSizeField.latex();
    try {
        stepSizeInput = parseFunction(stepSizeInput);
    } catch (error) {
        ansDecOutput.innerHTML = "Invalid stepsize!";
        return -1;
    }



    if (stepSizeInput.text() == 0) {
        var errorMessage = "Invalid input! Step size cannot be zero.";
        ansDecOutput.innerHTML = errorMessage;
        ansOutput.innerHTML = errorMessage;
        tableOutput.innerHTML = errorMessage;
        return "division by 0";
    }

    var beginningInputx = eulerBeginningField.latex();
    try {
        var x = parseFunction(beginningInputx);
    } catch (error) {
        ansDecOutput.innerHTML = "Invalid input for x!";
        return -1;
    }

    var beginningInputy = eulerBeginningYField.latex();
    try {
        var y = parseFunction(beginningInputy);
    } catch (error) {
        ansDecOutput.innerHTML = "Invalid input for y!";
        return -1;
    }

    var endInput = eulerEndField.latex();
    try {
        endInput = parseFunction(endInput);
    } catch (error) {
        ansDecOutput.innerHTML = "Invalid end input!";
        return -1;
    }

    var tableString = "";

    try {
        while (x < endInput) {
            tableString += "<b>" + "x: " + "</b>" + x.text() + " ";
            tableString += "<b>" + "y: " + "</b>"  + y.text() + " ";
    
    
            var slope = nerdamer(functionInput, { x: x });
            slope = nerdamer(slope, { y: y });
            var slopeOut = slope.text();
            slopeOut = logToLn(slopeOut);
    
            tableString += "<b>" + "slope: " + "</b>"  + slopeOut + " ";
    
            var slopeTimesStepSize = nerdamer(slope.multiply(stepSizeInput));
            y = nerdamer(slopeTimesStepSize).add(y);
            x = nerdamer(x).add(stepSizeInput);
    
            tableString += "<br>";
        }
    } catch (error) {
        ansDecOutput.innerHTML = "Error computing! (Likely an undefined value?)";
        return -1;
    }
    
    var yDec = nerdamer(y.evaluate());
    yDec = yDec.text();


    ansDecOutput.innerHTML = yDec;


    yOut = y.text();
    yOut = logToLn(yOut);
    ansOutput.innerHTML = yOut;


    tableOutput.innerHTML = tableString;

    y = nerdamer(y.evaluate());

    MQ.StaticMath(ansDecOutput);
    MQ.StaticMath(ansOutput);


}

function curve() {
    var curveAnsOutput = document.getElementById('curveAnswer');

    var func = cfiField.latex();

    try {
        func = parseFunction(func);

    } catch (error) {
        curveAnsOutput.innerHTML = "Invalid function!";
        return -1;
    }
    var start = csiField.latex();
    try {
       
        start = nerdamer.convertFromLaTeX(start);
   
        start = nerdamer(start);
        start = start.text();
     
        start = piToMathPi(start);
        start = start.replaceAll('e','Math.E')
        start = eval(start);
    } catch (error) {
        curveAnsOutput.innerHTML = "Invalid start!";
        return -1;
    }

    var end = ceiSpan.latex();
    try {
        end = nerdamer.convertFromLaTeX(end);
        end = nerdamer(end);
        end = end.text();
        end = piToMathPi(end);
        end = end.replaceAll('e','Math.E')
        end = eval(end);
    } catch (error) {
        curveAnsOutput.innerHTML = "Invalid end!";
        return -1;
    }

    try {
        func = nerdamer.diff(func, 'x');
        func = nerdamer(func).pow('2');
        func = nerdamer(1).add(func);
        func = nerdamer(func).pow('0.5');
        var ans = nerdamer.defint(func, start, end, 'x');
    } catch (error) {
        curveAnsOutput.innerHTML = "Error computing!";
        return -1;
    }

    curveAnsOutput.innerHTML = ans.text();
}

function vectorFirstDerivative() {
    var xfunc = vectorXField.latex();
    try {
        xfunc = parseFunction(xfunc);
    } catch (error) {
        vectorFirstDerivativeAnswer.innerHTML = "Invalid x input!";
        return -1;
    }

    var yfunc = vectorYField.latex();
    try {
        yfunc = parseFunction(yfunc);
    } catch (error) {
        vectorFirstDerivativeAnswer.innerHTML = "Invalid y input!";
        return -1;
    }


    try {
        var xfuncDeriv = nerdamer.diff(xfunc, 't');
        var yfuncDeriv = nerdamer.diff(yfunc, 't');
    } catch (error) {
        vectorFirstDerivativeAnswer.innerHTML = "Error computing!";
        return -1;
    }


    xfuncDeriv = parseAnswer(xfuncDeriv);
    yfuncDeriv = parseAnswer(yfuncDeriv);


    var ans = "&lang;" + xfuncDeriv + ", " + yfuncDeriv + "&rang;";

    showVectorFirstDerivatives();
    vectorFirstDerivativeAnswer.innerHTML = ans;
    MQ.StaticMath(vectorFirstDerivativeAnswer);

    hideVectorSecondDerivatives();
}

function vectorSecondDerivative() {
    var xfunc = vectorXField.latex();
    try {
        xfunc = parseFunction(xfunc);
    } catch (error) {
        vectorFirstDerivativeAnswer.innerHTML = "Invalid x input!";
        return -1;
    }

    var yfunc = vectorYField.latex();
    try {
        yfunc = parseFunction(yfunc);
    } catch (error) {
        vectorFirstDerivativeAnswer.innerHTML = "Invalid y input!";
        return -1;
    }

    var xfuncDeriv = nerdamer.diff(xfunc, 't');
    var yfuncDeriv = nerdamer.diff(yfunc, 't');

    var xFunc2ndDeriv = nerdamer.diff(xfuncDeriv, 't');
    var yFunc2ndDeriv = nerdamer.diff(yfuncDeriv, 't');

    xfuncDeriv = parseAnswer(xfuncDeriv);
    yfuncDeriv = parseAnswer(yfuncDeriv);


    var ansFirstDeriv = "&lang;" + xfuncDeriv + ", " + yfuncDeriv + "&rang;";

    showVectorFirstDerivatives();
    vectorFirstDerivativeAnswer.innerHTML = ansFirstDeriv;
    MQ.StaticMath(vectorFirstDerivativeAnswer);

    xFunc2ndDeriv = parseAnswer(xFunc2ndDeriv);
    yFunc2ndDeriv = parseAnswer(yFunc2ndDeriv);

    var ans2ndDeriv = "&lang;" + xFunc2ndDeriv + ", " + yFunc2ndDeriv + "&rang;";

    showVectorSecondDerivatives();
    vectorSecondDerivativeAnswer.innerHTML = ans2ndDeriv;
    MQ.StaticMath(vectorSecondDerivativeAnswer);
}

function vectorCurve() {
    var vectorCurveOutput = document.getElementById('vectorCurveAnswer');
    var xfunc = vectorXField.latex();
    try {
        xfunc = parseFunction(xfunc);
    } catch (error) {
        vectorCurveOutput.innerHTML = "Invalid x input!";
        return -1;
    }

    var yfunc = vectorYField.latex();
    try {
        yfunc = parseFunction(yfunc);
    } catch (error) {
        vectorCurveOutput.innerHTML = "Invalid y input!";
        return -1;
    }

    var xfuncDeriv = nerdamer.diff(xfunc, 't');
    var yfuncDeriv = nerdamer.diff(yfunc, 't');

    var start = vectorStartField.latex();
    try {
        start = parseNumber(start);
    } catch (error) {
        vectorCurveOutput.innerHTML = "Invalid start!";
        return -1;
    }

    var end = vectorEndField.latex();
    try {
        end = parseNumber(end);
    } catch (error) {
        vectorCurveOutput.innerHTML = "Invalid end!";
        return -1;
    }


    var dxdt2 = nerdamer(xfuncDeriv).pow('2');
    dxdt2 = nerdamer.expand(dxdt2);
    var dydt2 = nerdamer(yfuncDeriv).pow('2');
    dydt2 = nerdamer.expand(dydt2);

    var lengthFunction = nerdamer(dxdt2).add(dydt2);

    lengthFunction = nerdamer(lengthFunction).pow('0.5');

    var ans = nerdamer.defint(lengthFunction, start, end, 't');


    vectorCurveOutput.innerHTML = ans.text();
}

function vectorDisplacement() {
    var xfunc = vectorXField.latex();
    try {
        xfunc = parseFunction(xfunc);
    } catch (error) {
        vectorCurveOutput.innerHTML = "Invalid x input!";
        return -1;
    }

    var yfunc = vectorYField.latex();
    try {
        yfunc = parseFunction(yfunc);
    } catch (error) {
        vectorCurveOutput.innerHTML = "Invalid y input!";
        return -1;
    }

    var start = vectorStartField.latex();
    try {
        start = parseNumber(start);
    } catch (error) {
        vectorCurveOutput.innerHTML = "Invalid start!";
        return -1;
    }

    var end = vectorEndField.latex();
    try {
        end = parseNumber(end);
    } catch (error) {
        vectorCurveOutput.innerHTML = "Invalid end!";
        return -1;
    }

    var xDisplacement = nerdamer.defint(xfunc, start, end, 't');
    var yDisplacement = nerdamer.defint(yfunc, start, end, 't');

    xDisplacement = xDisplacement.text();
    yDisplacement = yDisplacement.text();

    var ans = "&lang;" + xDisplacement + ", " + yDisplacement + "&rang;";

    var vectorCurveOutput = document.getElementById('vectorCurveAnswer');
    vectorCurveOutput.innerHTML = ans;

}


function polarDerive() {
    var polarAnswerOutput = document.getElementById("polarAnswer");
    var func = polarInputField.latex();
    try {
        func = parseFunction(func);
    } catch (error) {
        polarAnswerOutput.innerHTML = "Invalid function!";
        return -1;
    }

    try {
        var cosTheta = nerdamer('cos(theta)');
        var sinTheta = nerdamer('sin(theta)');

        var x = nerdamer(func).multiply(cosTheta);
        var y = nerdamer(func).multiply(sinTheta);

        var dx = nerdamer.diff(x, 'theta');
        var dy = nerdamer.diff(y, 'theta');

        var ans = nerdamer(dy).divide(dx);
        ans = nerdamer.simplify(ans);
    } catch (error) {
        polarAnswerOutput.innerHTML = "Error computing!";
        return -1;
    }

    ans = nerdamer.convertToLaTeX(ans.text());


    polarAnswerOutput.innerHTML = ans;
    MQ.StaticMath(polarAnswerOutput);
}

function polarIntegrate() {
    var ansOut = document.getElementById('polarIntegrateAns');

    var func = polarInputField.latex();
    try {
        func = parseFunction(func);
    } catch (error) {
        ansOut.innerHTML = "Invalid function!";
        return -1;
    }

    var from = polarLowerBoundField.latex();


    try {
        from = parseNumberTest(from);
    } catch (error) {
        ansOut.innerHTML = "Invalid lower bound!";
        return -1;
    }

    var to = polarUpperBoundField.latex();
    try {
        to = parseNumberTest(to);
    } catch (error) {
        ansOut.innerHTML = "Invalid upper  bound!";
        return -1;
    }

    try {
        var ans = nerdamer(func).pow('2');
        ans = nerdamer.defint(func, from, to, 'theta');
        ans = nerdamer(ans).divide('2');
    } catch (error) {
        ansOut.innerHTML = "Computing error!";
        return -1;
    }


    var ansDec = nerdamer(ans).evaluate();
    ansDec = ansDec.text();

    ans = parseAnswer(ans);


    ansOut.innerHTML = ans;

    MQ.StaticMath(ansOut);

    var ansOutDec = document.getElementById('polarIntegrateAnsDec');
    ansOutDec.innerHTML = ansDec;


}

function hideParametricSecondDerivates() {
    var sectext = document.getElementById('deriv2');
    var secAns = document.getElementById('parametricAnswer2');
    sectext.style.display = 'none';
    secAns.style.display = 'none';
}

function showVectorFirstDerivatives() {
    vectorFirstDerivativeText.style.display = "block";
    vectorFirstDerivativeAnswer.style.display = "block";
}

function hideVectorSecondDerivatives() {
    vectorSecondDerivativeAnswerText.style.display = "none";
    vectorSecondDerivativeAnswer.style.display = 'none';
}

function showVectorSecondDerivatives() {
    vectorSecondDerivativeAnswerText.style.display = "block";
    vectorSecondDerivativeAnswer.style.display = 'block';
}


function showAllParametricDeterminate() {
    FirstDerivative.style.display = "block";
    FirstDerivativeAnswer.style.display = "block";
    FirstDerivativeAnswerDec.style.display = "block";
    ParametricFirstAnswerOutput.style.display = "block";
    ParametricFirstAnswerOutputDec.style.display = "block";

    SecondDerivative.style.display = "block";
    SecondDerivativeAnswer.style.display = "block";
    SecondDerivativeAnswerDec.style.display = "block";
    ParametricSecondAnswerOutput.style.display = "block";
    ParametricSecondAnswerOutputDec.style.display = "block";
}

function hideAllParametricDeterminateSecondDerivatives() {
    SecondDerivative.style.display = "none";
    SecondDerivativeAnswer.style.display = "none";
    SecondDerivativeAnswerDec.style.display = "none";
    ParametricSecondAnswerOutput.style.display = "none";
    ParametricSecondAnswerOutputDec.style.display = "none";
}

function showAllParametricDeterminateFirstDerivatives() {
    FirstDerivative.style.display = "block";
    FirstDerivativeAnswer.style.display = "block";
    FirstDerivativeAnswerDec.style.display = "block";
    ParametricFirstAnswerOutput.style.display = "block";
    ParametricFirstAnswerOutputDec.style.display = "block";
}



var expandSimplifySpan = document.getElementById('inputExpandSimplify');
var expandSimplifySpanField = MQ.MathField(expandSimplifySpan, {
    spaceBehavesLikeTab: true,
    autoCommands: 'pi theta',
})

function expand() {
    var output = document.getElementById('expandSimplifyAnswer');
    /*
    current problem: latex has multiplication signs as "cdot"
    when i take in an input as a latex, it still has "cdot"s in the string
    i then do convertFromLatex(input), turning it into a nerdamer object
    the string of the nerdamer object still has "cdot"s in them (<- problem)
    when i ship that nerdamer object to the nerdamer function, 
    for some  reason, they didn't work out the cdots (unless they did and idk)


    */
    var input = expandSimplifySpanField.latex();
    console.log(input + " is original input latex")
    //remove cdots from input here? (also backslashes)
    //////input = cdottoAsterisk(input);

    //console.log(input + " is input after cdottoAsterisk");
    try {
        var d = parseFunction(input);
    } catch (error) {
        output.innerHTML = "Invalid input!";
        return -1;
    }
    // console.log(d.text());

    //remove cdots here?

    try {
        var ans = nerdamer(d).expand();
    } catch (error) {
        output.innerHTML = "Computing error!";
        return -1;
    }
    // console.log(ans.text());

    ans = nerdamer.convertToLaTeX(ans.text());


    output.innerHTML = ans;
    MQ.StaticMath(output);
}
function simplify() {
    var output = document.getElementById('expandSimplifyAnswer');
    var input = expandSimplifySpanField.latex();
    //input = cdottoAsterisk(input);
    try {
        var d = parseFunction(input);
    } catch (error) {
        output.innerHTML = "Invalid input!";
        return -1;
    }

    try {
        var ans = nerdamer(d).simplify();
    } catch (error) {
        output.innerHTML = "Computing error!";
        return -1;
    }
    ans = nerdamer.convertToLaTeX(ans.text());

    output.innerHTML = ans;
    MQ.StaticMath(output);
}
function factor() {
    var output = document.getElementById('expandSimplifyAnswer');
    var input = expandSimplifySpanField.latex();
    //input = cdottoAsterisk(input);
    var d = nerdamer.convertFromLaTeX(input);

    var d1 = removecdots(d.text());

    d1 = "factor(" + d1 + ")";


    try {

        var ans = nerdamer.factor(d1);
    } catch (error) {
        output.innerHTML = "Computing error!";
        return -1;
    }
    ans = nerdamer.convertToLaTeX(ans.text());


    output.innerHTML = ans;
    MQ.StaticMath(output);
}

var topSpan = document.getElementById('inputTop');
var inputTopSpan = MQ.MathField(topSpan, {
    spaceBehavesLikeTab: true, autoCommands: 'pi theta',
})
var bottomSpan = document.getElementById('inputBottom');
var inputBottomSpan = MQ.MathField(bottomSpan, {
    spaceBehavesLikeTab: true, autoCommands: 'pi theta',
})

function add() {
    var output = document.getElementById('operationsAnswer');
    var input = inputTopSpan.latex();
    //input = cdottoAsterisk(input);
    try {
        var d = parseFunction(input);
    } catch (error) {
        output.innerHTML = "Invalid input on top box!";
        return -1;
    }

    var input1 = inputBottomSpan.latex();
    try {
        var d1 = parseFunction(input1);
    } catch (error) {
        output.innerHTML = "Invalid input on bottom box!";
        return -1;
    }
    //input1 = cdotToAsterisk(input1);


    try {
        var ans = nerdamer(d).add(d1);
    } catch (error) {
        output.innerHTML = "Computing error!";
        return -1;
    }
    ans = nerdamer.convertToLaTeX(ans.text());

    output.innerHTML = ans;
    MQ.StaticMath(output);
}
function difference() {
    var output = document.getElementById('operationsAnswer');
    var input = inputTopSpan.latex();
    //input = cdottoAsterisk(input);
    try {
        var d = parseFunction(input);
    } catch (error) {
        output.innerHTML = "Invalid input on top box!";
        return -1;
    }

    var input1 = inputBottomSpan.latex();
    //input1 = cdotToAsterisk(input1);
    try {
        var d1 = parseFunction(input1);
    } catch (error) {
        output.innerHTML = "Invalid input on bottom box!";
        return -1;
    }

    try {
        var ans = nerdamer(d).subtract(d1);
    } catch (error) {
        output.innerHTML = "Computing error!";
        return -1;
    }
    ans = nerdamer.convertToLaTeX(ans.text());

    output.innerHTML = ans;
    MQ.StaticMath(output);
}
function multiply() {
    var output = document.getElementById('operationsAnswer');
    var input = inputTopSpan.latex();
    //input = cdottoAsterisk(input);
    try {
        var d = parseFunction(input);
    } catch (error) {
        output.innerHTML = "Invalid input on top box!";
        return -1;
    }

    var input1 = inputBottomSpan.latex();
    //input1 = cdotToAsterisk(input1);
    try {
        var d1 = parseFunction(input1);
    } catch (error) {
        output.innerHTML = "Invalid input on bottom box!";
        return -1;
    }

    try {
        var ans = nerdamer(d).multiply(d1);
        ans = nerdamer(ans).expand();
    } catch (error) {
        output.innerHTML = "Computing error!";
        return -1;
    }
    ans = nerdamer.convertToLaTeX(ans.text());

    output.innerHTML = ans;
    MQ.StaticMath(output);
}
function divide() {
    var output = document.getElementById('operationsAnswer');
    var input = inputTopSpan.latex();
    //input = cdottoAsterisk(input);
    try {
        var d = parseFunction(input);
    } catch (error) {
        output.innerHTML = "Invalid input on top box!";
        return -1;
    }

    var input1 = inputBottomSpan.latex();
    //input1 = cdotToAsterisk(input1);
    try {
        var d1 = parseFunction(input1);
    } catch (error) {
        output.innerHTML = "Invalid input on bottom box!";
        return -1;
    }

    try {
        var ans = nerdamer.divide(d, d1);
    } catch (error) {
        output.innerHTML = "Computing error!";
        return -1;
    }
    ans = nerdamer.convertToLaTeX(ans.text());

    output.innerHTML = ans;
    MQ.StaticMath(output);
}


var inputRootsSpan = document.getElementById('inputRoots');
var inputRootsField = MQ.MathField(inputRootsSpan, {
    spaceBehavesLikeTab: true, autoCommands: 'pi theta',
    handlers: {
        enter: function () { roots(); }
    }
})

function roots() {
    var output = document.getElementById('rootsAnswer');
    var input = inputRootsField.latex();
    //input = cdottoAsterisk(input);
    try {
        var d = parseFunction(input);
    } catch (error) {
        output.innerHTML = "Invalid input!";
        return -1;
    }
    //console.log(d.text());


    try {
        var ans = nerdamer.roots(d);
    } catch (error) {
        output.innerHTML = "Computing error!";
        return -1;
    }
    var ans1 = ans.text('decimals');

    ans = nerdamer.convertToLaTeX(ans.text());


    output.innerHTML = ans;
    MQ.StaticMath(output);
    //console.log(ans);


    //   var outputDecimal = nerdamer(ans1.text('decimals'), ['numer']);

    //   var outputDecimal = nerdamer.convertToLaTeX(outputDecimal.text('decimals'));


    var rootsAnswerDec = document.getElementById("rootsAnswerDec");
    rootsAnswerDec.innerHTML = ans1;
    MQ.StaticMath(rootsAnswerDec);
    //console.log(outputDec);
    //create new string (final form should be in latex)
    //cycle thru old string, when see frac, take inputs, divide into number
    //add number as string to new string

}


function hasNaN(p1) {
    var temp = "";
    for (let i = 0; i < p1.length; i++) {
        temp = p1.slice(i, i + 3)
        if (temp == "NaN") {
            return true;
        }
    }
    return false;
}


var pluginFunctionSpan = document.getElementById('pluginFunction');
var pluginFunctionField = MQ.MathField(pluginFunctionSpan, {
    spaceBehavesLikeTab: true, autoCommands: 'pi theta',
    handlers: {
        enter: function () { plugin(); }
    }
})

var pluginVarInputSpan = document.getElementById('pluginVarInput');
var pluginVarInputField = MQ.MathField(pluginVarInputSpan, {
    spaceBehavesLikeTab: true, autoCommands: 'pi theta',
    handlers: {
        enter: function () { plugin(); }
    }
})

function plugin() {
    var ansOutput = document.getElementById('pluginOutput');
    var func = pluginFunctionField.latex();
    //  console.log("func before parseFunction: " + func);
    try {
        func = parseFunction(func);
    } catch (error) {
        ansOutput.innerHTML = "Invalid equation!";
        return -1;
    }

    //   console.log("func.text() at beginning: " + func.text());

    var subs = pluginVarInputField.latex();
    //  console.log(subs);

    var arr = parsePlugInInput(subs);
    //  console.log(subs);

    var letter = arr[0];
    var num = arr[1];

    try {
        var ans = pluginLetterNumToAns(func, letter, num);
    } catch (error) {
        ansOutput.innerHTML = "Computing error!";
        return -1;
    }

    //var ans1 = nerdamer(func,{subs});

    //   console.log("ans is: " + ans1.text());
    ans = parseAnswer(ans);
    //   console.log("ans after parseAnswer " + ans1);


    ansOutput.innerHTML = ans;
    MQ.StaticMath(ansOutput);
    //   console.log("func.text() at end: " + func.text());


    //BUG: plugin only works once(what the fuck)
    /*
    after convertfromlatex in parsefunction, func turns into previous answer (idk how)
    */

    //current objective: new input format: y=7
    //split at equals, return two strings,
    //ship off latex of pluginvarinputfield, make it return an array of size 2
    //worst comes to worst, we do a little brute forcing of all 26 characters and theta

}


function pluginLetterNumToAns(func, letter, num) {
    if (letter == "q") {
        var ans = nerdamer(func, { 'q': num });
    }
    else if (letter == "w") {
        var ans = nerdamer(func, { 'w': num });
    }
    else if (letter == "e") {
        var ans = nerdamer(func, { 'e': num });
    }
    else if (letter == "r") {
        var ans = nerdamer(func, { 'r': num });
    }
    else if (letter == "t") {
        var ans = nerdamer(func, { 't': num });
    }
    else if (letter == "y") {
        var ans = nerdamer(func, { 'y': num });
    }
    else if (letter == "u") {
        var ans = nerdamer(func, { 'u': num });
    }
    else if (letter == "i") {
        var ans = nerdamer(func, { 'i': num });
    }
    else if (letter == "o") {
        var ans = nerdamer(func, { 'o': num });
    }
    else if (letter == "p") {
        var ans = nerdamer(func, { 'p': num });
    }
    else if (letter == "a") {
        var ans = nerdamer(func, { 'a': num });
    }
    else if (letter == "s") {
        var ans = nerdamer(func, { 's': num });
    }
    else if (letter == "d") {
        var ans = nerdamer(func, { 'd': num });
    }
    else if (letter == "f") {
        var ans = nerdamer(func, { 'f': num });
    }
    else if (letter == "g") {
        var ans = nerdamer(func, { 'g': num });
    }
    else if (letter == "h") {
        var ans = nerdamer(func, { 'h': num });
    }
    else if (letter == "j") {
        var ans = nerdamer(func, { 'j': num });
    }
    else if (letter == "k") {
        var ans = nerdamer(func, { 'k': num });
    }
    else if (letter == "l") {
        var ans = nerdamer(func, { 'l': num });
    }
    else if (letter == "z") {
        var ans = nerdamer(func, { 'z': num });
    }
    else if (letter == "x") {
        var ans = nerdamer(func, { 'x': num });
    }
    else if (letter == "c") {
        var ans = nerdamer(func, { 'c': num });
    }
    else if (letter == "v") {
        var ans = nerdamer(func, { 'v': num });
    }
    else if (letter == "b") {
        var ans = nerdamer(func, { 'b': num });
    }
    else if (letter == "n") {
        var ans = nerdamer(func, { 'n': num });
    }
    else if (letter == "m") {
        var ans = nerdamer(func, { 'm': num });
    }
    else if (letter == "theta") {
        var ans = nerdamer(func, { 'theta': num });
    }
    else {
        return "Not a valid variable!";
    }
    return ans;
}

function parsePlugInInput(str) {
    var ans = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "=") {
            ans.push(str.slice(0, i));
            ans.push(str.slice(i + 1, str.length));
            return ans;
        }
    }
    return "Equals not found!";
}

function removeAsterisks(p1) {
    return p1.replaceAll("*", "");
}

function parseAnswer(nerdamerObjectInput) {  //ouputs string as latex with logs as ln
    // var ans = nerdamerObjectInput.text();
    // console.log(1);
    // ans = logToLn(ans);
    // console.log(2);
    // console.log(ans + " |(ans after logTOLn in parseAnswer)");
    var ans = nerdamer.convertToLaTeX(nerdamerObjectInput.text());
    //  console.log(3);
    ans = logToLn(ans);
    // var ans = removeAsterisks(nerdamerObjectInput.text());
    // console.log("ans after removeAsterisks(ans.text()): " + ans);
    // ans = removecdots(ans);
    // console.log("ans after removecdots(ans): " + ans);
    return ans;
}

function parseFunction(latexInput) {  //takes in latex input, does cdottoasterisk, ln to log, returns nerdamer obj
    var ans = cdotToAsterisk(latexInput);
    ans = lnToLog(ans);
    ans = nerdamer.convertFromLaTeX(ans);
    return ans; //returns nerdamer obj
}

function parseNumber(latexInput) { //outputs nerdamer object
    var ans = cdotToAsterisk(latexInput);
    ans = lnToLog(ans);
    ans = nerdamer.convertFromLaTeX(ans);
    ans = nerdamer(ans.evaluate());
    return ans;
}

function piToMathPi(p1) { //takes in string (NOT LATEX STRING), outputs a number
    return p1.replaceAll('pi', 'Math.PI');
} //need a replaceall

function lnToLog(p1) {
    return p1.replaceAll('ln', 'log');
}

function logToLn(p1) {
    return p1.replaceAll('log', 'ln');
}

function cdotToAsterisk(p1) {  //takes in latex, has cdots in them, remove them and replace them with asterisks
    return p1.replaceAll("\\cdot", '*');

}

function parseNumberTest(latexInput) {
    var ans = cdotToAsterisk(latexInput);
    ans = lnToLog(ans);
    ans = nerdamer.convertFromLaTeX(ans);

    return ans;
}

function removecdots(p1) {
    return p1.replaceAll("\\cdot", "");
}